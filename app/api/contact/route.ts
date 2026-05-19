import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json(
        { error: "E-Mail nicht konfiguriert. Bitte schreib uns direkt auf WhatsApp." },
        { status: 503 }
      );
    }

    const { name, company, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, E-Mail und Nachricht sind Pflichtfelder." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"KundenPilot Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Neue Anfrage: ${subject || "Allgemeine Anfrage"} – von ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8fafc; border-radius: 12px;">
          <div style="background: #0f172a; padding: 20px 24px; border-radius: 8px; margin-bottom: 24px;">
            <h1 style="color: white; margin: 0; font-size: 20px;">📩 Neue Kontaktanfrage</h1>
            <p style="color: #94a3b8; margin: 4px 0 0; font-size: 14px;">KundenPilot Website</p>
          </div>

          <div style="background: white; border-radius: 8px; padding: 20px 24px; margin-bottom: 16px; border: 1px solid #e2e8f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 130px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Name</td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 15px; font-weight: 600;">${name}</td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Unternehmen</td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 15px;">${company}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">E-Mail</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1d4ed8; font-size: 15px;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Interesse</td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 15px;">${subject || "Nicht angegeben"}</td>
              </tr>
            </table>
          </div>

          <div style="background: white; border-radius: 8px; padding: 20px 24px; border: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 12px;">Nachricht</p>
            <p style="color: #1e293b; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 20px; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; background: #1d4ed8; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
              ↩ Direkt antworten an ${name}
            </a>
          </div>

          <p style="color: #94a3b8; font-size: 12px; text-align: center; margin-top: 20px;">
            Gesendet über kundenpilot.site
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Fehler beim Senden. Bitte versuche es erneut." },
      { status: 500 }
    );
  }
}
