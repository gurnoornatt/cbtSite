import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, phone, email, time } = body

    // Create transporter using Gmail SMTP
    // Note: You'll need to set up App Password in Gmail for this to work
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "Centralbtschool@gmail.com",
      subject: "🚛 New Campus Visit Request - Central Bus & Truck Driving School",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #1a1a1a; color: #ffffff; padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: #ffd700; margin: 0 0 10px 0;">🚛 New Campus Visit Request</h1>
            <p style="margin: 0; color: #cccccc;">Central Bus & Truck Driving School</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #1a1a1a; margin-top: 0;">Student Information</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Name:</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Phone:</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;"><a href="tel:${phone}" style="color: #ffd700; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #ffd700; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Preferred Time:</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">${time}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; color: #555;">Submitted:</td>
                <td style="padding: 12px;">${new Date().toLocaleString("en-US", {
                  timeZone: "America/Los_Angeles",
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}</td>
              </tr>
            </table>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #ffd700;">
              <h3 style="margin-top: 0; color: #1a1a1a;">Next Steps:</h3>
              <ul style="margin: 0; padding-left: 20px; color: #555;">
                <li>Call the student to confirm visit time</li>
                <li>Prepare campus tour materials</li>
                <li>Have program information ready</li>
                <li>Schedule with available instructor</li>
              </ul>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #888; font-size: 14px;">
            <p>This email was sent from your website contact form</p>
            <p>Central Bus & Truck Driving School | 4045 S Cherry Ave, Fresno, CA 93706 | (559) 905-0496</p>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
