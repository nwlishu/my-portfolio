// Quick test script to verify Gmail credentials
const nodemailer = require('nodemailer');

// Read from .env.local manually
const fs = require('fs');
const envContent = fs.readFileSync('.env.local', 'utf-8');
const EMAIL_USER = envContent.match(/EMAIL_USER=(.+)/)?.[1]?.trim() || '';
const EMAIL_PASSWORD = envContent.match(/EMAIL_PASSWORD=(.+)/)?.[1]?.trim() || '';
const EMAIL_TO = envContent.match(/EMAIL_TO=(.+)/)?.[1]?.trim() || EMAIL_USER;

async function testEmail() {
  console.log('Testing email configuration...');
  console.log('EMAIL_USER:', EMAIL_USER);
  console.log('EMAIL_PASSWORD:', EMAIL_PASSWORD ? `✅ Set (length: ${EMAIL_PASSWORD.length})` : '❌ Not set');

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
    });

    // Verify connection
    await transporter.verify();
    console.log('✅ SUCCESS! Gmail credentials are valid!');

    // Send test email
    const info = await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_TO,
      subject: 'Test Email from Portfolio',
      text: 'If you receive this, your email setup is working!',
    });

    console.log('✅ Test email sent! Message ID:', info.messageId);
    console.log('Check your inbox at:', EMAIL_TO);

  } catch (error) {
    console.error('❌ ERROR:', error.message);

    if (error.message.includes('Invalid login')) {
      console.error('\n⚠️  FIX: Your email or app password is incorrect!');
      console.error('1. Make sure 2FA is enabled on your Google account');
      console.error('2. Generate a NEW app password at: https://myaccount.google.com/apppasswords');
      console.error('3. Copy it WITHOUT spaces');
      console.error('4. Update .env.local');
    }
  }
}

testEmail();
