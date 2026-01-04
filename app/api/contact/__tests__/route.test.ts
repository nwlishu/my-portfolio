import { POST, GET } from '../route'
import { NextRequest } from 'next/server'

// Mock nodemailer
jest.mock('nodemailer', () => ({
  createTransport: jest.fn(() => ({
    sendMail: jest.fn().mockResolvedValue({ messageId: 'test-message-id' }),
  })),
}))

// Mock environment variables
const originalEnv = process.env

describe('Contact API Route', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    process.env = {
      ...originalEnv,
      EMAIL_USER: 'test@example.com',
      EMAIL_PASSWORD: 'test-password',
      EMAIL_TO: 'recipient@example.com',
    }
  })

  afterEach(() => {
    process.env = originalEnv
  })

  describe('POST /api/contact', () => {
    it('should successfully send email with valid data', async () => {
      const requestBody = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message',
      }

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.message).toContain('Thank you')
    })

    it('should return 400 when name is missing', async () => {
      const requestBody = {
        email: 'john@example.com',
        message: 'This is a test message',
      }

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(400)
      expect(data.error).toBe('Missing required fields')
    })

    it('should return 400 when email is missing', async () => {
      const requestBody = {
        name: 'John Doe',
        message: 'This is a test message',
      }

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(400)
      expect(data.error).toBe('Missing required fields')
    })

    it('should return 400 when message is missing', async () => {
      const requestBody = {
        name: 'John Doe',
        email: 'john@example.com',
      }

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(400)
      expect(data.error).toBe('Missing required fields')
    })

    it('should return 400 for invalid email format', async () => {
      const requestBody = {
        name: 'John Doe',
        email: 'invalid-email',
        message: 'This is a test message',
      }

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(400)
      expect(data.error).toBe('Invalid email')
    })

    it('should return 400 when name exceeds 100 characters', async () => {
      const requestBody = {
        name: 'a'.repeat(101),
        email: 'john@example.com',
        message: 'This is a test message',
      }

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(400)
      expect(data.error).toBe('Name too long')
    })

    it('should return 400 when message exceeds 5000 characters', async () => {
      const requestBody = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'a'.repeat(5001),
      }

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(400)
      expect(data.error).toBe('Message too long')
    })

    it('should sanitize HTML from inputs', async () => {
      const requestBody = {
        name: 'John <script>alert("xss")</script> Doe',
        email: 'john@example.com',
        message: 'This is a <b>test</b> message',
      }

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
    })

    it('should return 500 when email configuration is missing', async () => {
      delete process.env.EMAIL_USER
      delete process.env.EMAIL_PASSWORD

      const requestBody = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message',
      }

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(500)
      expect(data.error).toBe('Server configuration error')
    })

    it('should rate limit after 3 requests', async () => {
      const requestBody = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message',
      }

      const headers = {
        'Content-Type': 'application/json',
        'x-forwarded-for': '192.168.1.1',
      }

      // Make 3 successful requests
      for (let i = 0; i < 3; i++) {
        const request = new NextRequest('http://localhost:3000/api/contact', {
          method: 'POST',
          headers,
          body: JSON.stringify(requestBody),
        })

        const response = await POST(request)
        expect(response.status).toBe(200)
      }

      // 4th request should be rate limited
      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        headers,
        body: JSON.stringify(requestBody),
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(429)
      expect(data.error).toBe('Too many requests')
    })
  })

  describe('GET /api/contact', () => {
    it('should return 405 Method Not Allowed', async () => {
      const response = await GET()
      const data = await response.json()

      expect(response.status).toBe(405)
      expect(data.error).toBe('Method not allowed')
    })
  })
})
