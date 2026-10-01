import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Imap from "imap";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, service, time, notes } = body;

    console.log("📧 Form submission received:", {
      firstName,
      lastName,
      email,
      phone,
      service,
      time,
      notes: notes ? "yes" : "no"
    });

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      console.log("❌ Validation failed: Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // port 465 = SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Hostinger-specific settings for proper sent folder saving
      tls: {
        rejectUnauthorized: false
      },
      debug: true, // Enable debug logs
      logger: true // Enable logger
    });

    console.log("🔧 SMTP Configuration:", {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      toEmail: process.env.CONTACT_TO_EMAIL,
    });

    // Email HTML content
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 20px;">
        <div style="background: #1a56a0; padding: 24px 28px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">
            📅 New Appointment Request
          </h1>
          <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 14px;">
            Premier Dentistry of Charlotte
          </p>
        </div>

        <div style="background: white; padding: 28px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; width: 40%;">
                <strong>Patient Name</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">
                ${firstName} ${lastName}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">
                <strong>Email</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">
                <a href="mailto:${email}" style="color: #1a56a0;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">
                <strong>Phone</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">
                <a href="tel:${phone}" style="color: #1a56a0;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">
                <strong>Reason for Visit</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">
                ${service || "Not specified"}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">
                <strong>Preferred Time</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">
                ${time || "No preference"}
              </td>
            </tr>
            ${
              notes
                ? `
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px; vertical-align: top;">
                <strong>Notes</strong>
              </td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px;">
                ${notes}
              </td>
            </tr>`
                : ""
            }
          </table>

          <div style="margin-top: 24px; padding: 16px; background: #eff6ff; border-radius: 8px; border-left: 4px solid #1a56a0;">
            <p style="margin: 0; font-size: 13px; color: #1e40af;">
              ⏰ Please respond within 1 business day to confirm the appointment.
            </p>
          </div>
        </div>

        <p style="text-align: center; font-size: 12px; color: #9ca3af; margin-top: 16px;">
          Sent from premierdentistrync.com contact form
        </p>
      </div>
    `;

    // Send email
    console.log("📬 Attempting to send email to:", process.env.CONTACT_TO_EMAIL);
    
    const mailResult = await transporter.sendMail({
      from: `"Premier Dentistry Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New Appointment Request — ${firstName} ${lastName}`,
      html,
      // Add headers to ensure proper delivery tracking
      headers: {
        'X-Mailer': 'Premier Dentistry Contact Form',
        'X-Priority': '1'
      }
    });

    console.log("✅ Email sent successfully:", {
      messageId: mailResult.messageId,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `New Appointment Request — ${firstName} ${lastName}`,
      response: mailResult.response
    });

    // CRITICAL: SMTP doesn't save to sent folder automatically
    // We need to manually save using IMAP or send a copy to sender
    try {
      // Send a copy to sender's inbox for record keeping
      await transporter.sendMail({
        from: `"Premier Dentistry Website" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER, // Send copy to sender
        subject: `[COPY] New Appointment Request — ${firstName} ${lastName}`,
        html: `
          <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 16px; margin-bottom: 20px; border-radius: 8px;">
            <p style="margin: 0; color: #856404;">
              📋 <strong>Copy for Records:</strong> This is a copy of the appointment request sent to ${process.env.CONTACT_TO_EMAIL}
            </p>
          </div>
          ${html}
        `,
      });
      
      console.log("📋 Copy sent to sender's inbox for records");
      
      // PROPER SOLUTION: Save to Sent folder using IMAP
      await saveToSentFolder({
        from: `"Premier Dentistry Website" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_TO_EMAIL,
        subject: `New Appointment Request — ${firstName} ${lastName}`,
        html: html,
        messageId: mailResult.messageId
      });
      
    } catch (copyError) {
      console.warn("⚠️  Could not send copy to sender:", copyError.message);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}

// Function to save email to Sent folder using IMAP
async function saveToSentFolder(emailData: {
  from: string;
  to: string;
  subject: string;
  html: string;
  messageId: string;
}) {
  return new Promise<void>((resolve, reject) => {
    const imap = new Imap({
      user: process.env.SMTP_USER!,
      password: process.env.SMTP_PASS!,
      host: process.env.IMAP_HOST || 'imap.hostinger.com',
      port: 993,
      tls: true,
      tlsOptions: {
        rejectUnauthorized: false
      }
    });

    imap.once('ready', () => {
      console.log("📬 IMAP connected, saving to Sent folder...");
      
      // Create email message in proper format
      const emailMessage = [
        `Message-ID: ${emailData.messageId}`,
        `From: ${emailData.from}`,
        `To: ${emailData.to}`,
        `Subject: ${emailData.subject}`,
        `Date: ${new Date().toUTCString()}`,
        `MIME-Version: 1.0`,
        `Content-Type: text/html; charset=UTF-8`,
        ``,
        emailData.html
      ].join('\r\n');

      // Try different sent folder names (Hostinger variations)
      const sentFolderNames = ['Sent', 'INBOX.Sent', 'Sent Messages', 'Sent Items'];
      
      let folderTried = 0;
      function trySentFolder() {
        if (folderTried >= sentFolderNames.length) {
          reject(new Error('No Sent folder found'));
          return;
        }
        
        const folderName = sentFolderNames[folderTried];
        folderTried++;
        
        imap.openBox(folderName, false, (err, box) => {
          if (err) {
            console.log(`❌ ${folderName} folder not found, trying next...`);
            trySentFolder();
            return;
          }
          
          imap.append(emailMessage, { mailbox: folderName }, (appendErr) => {
            if (appendErr) {
              console.error(`❌ Failed to save to ${folderName}:`, appendErr.message);
              trySentFolder();
            } else {
              console.log(`✅ Email saved to ${folderName} folder successfully`);
              imap.end();
              resolve();
            }
          });
        });
      }
      
      trySentFolder();
    });

    imap.once('error', (err) => {
      console.error("❌ IMAP Error:", err.message);
      reject(err);
    });

    imap.once('end', () => {
      console.log("📪 IMAP connection ended");
    });

    // Set timeout for IMAP operation
    setTimeout(() => {
      if (imap.state !== 'disconnected') {
        imap.end();
        reject(new Error('IMAP timeout'));
      }
    }, 10000);

    imap.connect();
  });
}
