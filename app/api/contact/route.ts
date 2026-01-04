import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Rate limiting: Simple in-memory store (for production, use Redis)
const rateLimit = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds
const MAX_REQUESTS = 3 // Max 3 submissions per hour per IP

function checkRateLimit(ip: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now()
  const userLimit = rateLimit.get(ip)

  if (!userLimit || now > userLimit.resetTime) {
    // First request or time window expired
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return { allowed: true }
  }

  if (userLimit.count >= MAX_REQUESTS) {
    return { allowed: false, resetTime: userLimit.resetTime }
  }

  // Increment count
  userLimit.count += 1
  return { allowed: true }
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function sanitizeInput(input: string): string {
  // Remove any HTML tags and trim whitespace
  return input.replace(/<[^>]*>/g, '').trim()
}

export async function POST(request: NextRequest) {
  try {
    // Get IP address for rate limiting
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown'

    // Check rate limit
    const rateLimitCheck = checkRateLimit(ip)
    if (!rateLimitCheck.allowed) {
      const resetTime = rateLimitCheck.resetTime
        ? new Date(rateLimitCheck.resetTime).toLocaleTimeString()
        : 'soon'

      return NextResponse.json(
        {
          error: 'Too many requests',
          message: `Rate limit exceeded. Please try again after ${resetTime}`,
        },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields', message: 'Please provide name, email, and message' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email', message: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Validate field lengths
    if (name.length > 100) {
      return NextResponse.json(
        { error: 'Name too long', message: 'Name must be less than 100 characters' },
        { status: 400 }
      )
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: 'Message too long', message: 'Message must be less than 5000 characters' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name)
    const sanitizedEmail = sanitizeInput(email)
    const sanitizedMessage = sanitizeInput(message)

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Email configuration missing')
      return NextResponse.json(
        { error: 'Server configuration error', message: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can change this to other services
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, // Where you want to receive messages
      subject: `Portfolio Contact Form: Message from ${sanitizedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #272727; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #666;">From:</strong> ${sanitizedName}
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #666;">Email:</strong>
              <a href="mailto:${sanitizedEmail}" style="color: #272727;">${sanitizedEmail}</a>
            </p>
          </div>

          <div style="background-color: #f5f5f7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #333; white-space: pre-wrap;">${sanitizedMessage}</p>
          </div>

          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px;">
            <p>This message was sent from your portfolio contact form</p>
            <p>Sent at: ${new Date().toLocaleString()}</p>
            <p>IP Address: ${ip}</p>
          </div>
        </div>
      `,
      // Plain text version for email clients that don't support HTML
      text: `
New Contact Form Submission

From: ${sanitizedName}
Email: ${sanitizedEmail}

Message:
${sanitizedMessage}

---
Sent at: ${new Date().toLocaleString()}
IP Address: ${ip}
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! I will get back to you soon.',
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)

    // Don't expose internal errors to client
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: 'Failed to send message. Please try again later or email me directly.',
      },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed', message: 'This endpoint only accepts POST requests' },
    { status: 405 }
  )
}
