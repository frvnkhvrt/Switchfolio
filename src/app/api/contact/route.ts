/**
 * Contact Form API Route
 * Handles contact form submissions with email integration
 */

import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Form validation schema (matches frontend)
const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  subject: z.string().min(5).max(100),
  message: z.string().min(10).max(1000),
  persona: z.enum(['francisco', 'frankhurt']),
})


// Rate limiting (simple in-memory store)
const submissions = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX = 3 // 3 submissions per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const userSubmissions = submissions.get(ip) || []

  // Remove old submissions outside the window
  const recentSubmissions = userSubmissions.filter(
    timestamp => now - timestamp < RATE_LIMIT_WINDOW
  )

  // Check if user exceeded limit
  if (recentSubmissions.length >= RATE_LIMIT_MAX) {
    return true
  }

  // Add current submission
  recentSubmissions.push(now)
  submissions.set(ip, recentSubmissions)

  return false
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown'

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Prepare email content
    const { name, email, subject, message, persona } = validatedData

    const emailContent = {
      to: process.env.CONTACT_EMAIL || 'contact@example.com',
      subject: `[${persona.toUpperCase()}] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #3e43f0; border-bottom: 2px solid #3e43f0; padding-bottom: 10px;">
              New Contact Form Submission
            </h1>

            <div style="background: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 5px;">
              <h2 style="margin-top: 0; color: #333;">Contact Details</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Persona:</strong> ${persona}</p>
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>

            <div style="background: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 5px;">
              <h2 style="margin-top: 0; color: #333;">Message</h2>
              <h3 style="margin-top: 0; color: #666;">${subject}</h3>
              <div style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 3px; border-left: 4px solid #3e43f0;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
              <p>This message was sent from the ${persona} persona contact form.</p>
              <p>IP Address: ${ip}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Contact Details:
- Name: ${name}
- Email: ${email}
- Persona: ${persona}
- Submitted: ${new Date().toLocaleString()}

Subject: ${subject}

Message:
${message}

---
This message was sent from the ${persona} persona contact form.
IP Address: ${ip}
      `,
    }

    // Send email using a service (you can replace this with your preferred email service)
    // For now, we'll just log it and return success
    console.log('Contact form submission:', emailContent)

    // TODO: Integrate with email service like:
    // - SendGrid
    // - Resend
    // - EmailJS
    // - AWS SES
    // - etc.

    // Example with a simple email service:
    /*
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'contact@yourdomain.com',
        to: emailContent.to,
        subject: emailContent.subject,
        html: emailContent.html,
        text: emailContent.text,
      }),
    })

    if (!emailResponse.ok) {
      throw new Error('Failed to send email')
    }
    */

    // For development/demo purposes, we'll simulate success
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully'
    })

  } catch (error) {
    console.error('Contact form API error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: error.issues.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          }))
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}