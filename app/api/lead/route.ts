import { Resend } from 'resend'
import twilio from 'twilio'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

export async function POST(request: Request) {
  const body = await request.json()
  const { bizName, bizPhone, callsPerDay, missedPerDay, lostRevLow, lostRevHigh } = body

  const name = bizName || 'Unknown business'
  const phone = bizPhone || 'No phone provided'
  const low = lostRevLow?.toLocaleString() || '?'
  const high = lostRevHigh?.toLocaleString() || '?'
  const submittedAt = new Date().toLocaleString('en-US', {
    timeZone: 'America/Chicago',
    dateStyle: 'short',
    timeStyle: 'short',
  })

  const results: Record<string, string> = {}

  // ── SMS via Twilio ──
  try {
    const msg = await twilioClient.messages.create({
      body: [
        `🔥 New TexAgent lead!`,
        `Business: ${name}`,
        `Phone: ${phone}`,
        `Calls/day: ${callsPerDay} | Missed: ${missedPerDay}`,
        `Est. lost: $${low}–$${high}/mo`,
        `Time: ${submittedAt} CT`,
        `Cal: https://cal.com/hassan-hai-jegppt/30min`,
      ].join('\n'),
      from: process.env.TWILIO_PHONE_NUMBER!,
      to: process.env.YOUR_PHONE_NUMBER!,
    })
    results.sms = `sent: ${msg.sid}`
    console.log('✅ SMS sent:', msg.sid)
  } catch (err: any) {
    results.sms = `FAILED: ${err?.message}`
    console.error('❌ SMS error:', err?.message, err?.code)
  }

  // ── Email via Resend ──
  try {
    const email = await resend.emails.send({
      from: 'TexAgent Leads <onboarding@resend.dev>',
      to: 'texagentx@gmail.com',
      subject: `🔥 New lead: ${name} — ~$${low}–$${high}/mo lost`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:580px;margin:0 auto;background:#f9f8f5;padding:24px;border-radius:12px">
          <div style="background:#0c0c0b;border-radius:10px;padding:20px 24px;margin-bottom:16px">
            <p style="color:#5dd4c4;font-size:12px;margin:0 0 4px 0;letter-spacing:0.08em;text-transform:uppercase">New Lead · ${submittedAt} CT</p>
            <h1 style="color:#fff;font-size:20px;margin:0">${name}</h1>
          </div>
          <div style="background:#fff;border-radius:10px;padding:20px 24px;margin-bottom:12px;border:1px solid #e4e0d8">
            <p style="font-size:12px;color:#9a9690;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 12px 0">Contact</p>
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr>
                <td style="color:#9a9690;padding:6px 0;width:130px">Business</td>
                <td style="color:#0c0c0b;font-weight:600;padding:6px 0">${name}</td>
              </tr>
              <tr style="border-top:1px solid #f2efe8">
                <td style="color:#9a9690;padding:6px 0">Phone</td>
                <td style="color:#0c0c0b;font-weight:600;padding:6px 0">
                  <a href="tel:${phone}" style="color:#0d7c6e;text-decoration:none">${phone}</a>
                </td>
              </tr>
            </table>
          </div>
          <div style="background:#fff;border-radius:10px;padding:20px 24px;margin-bottom:12px;border:1px solid #e4e0d8">
            <p style="font-size:12px;color:#9a9690;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 12px 0">Call Volume</p>
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr>
                <td style="color:#9a9690;padding:6px 0;width:130px">Calls/day</td>
                <td style="color:#0c0c0b;font-weight:600;padding:6px 0">${callsPerDay}</td>
              </tr>
              <tr style="border-top:1px solid #f2efe8">
                <td style="color:#9a9690;padding:6px 0">Missed/day</td>
                <td style="color:#0c0c0b;font-weight:600;padding:6px 0">${missedPerDay}</td>
              </tr>
            </table>
          </div>
          <div style="background:#0d7c6e;border-radius:10px;padding:20px 24px;margin-bottom:12px">
            <p style="color:rgba(255,255,255,0.65);font-size:12px;margin:0 0 6px 0;text-transform:uppercase;letter-spacing:0.08em">Est. Monthly Revenue Lost</p>
            <p style="color:#fff;font-size:30px;font-weight:700;margin:0;letter-spacing:-0.02em">$${low} – $${high}</p>
            <p style="color:rgba(255,255,255,0.55);font-size:12px;margin:8px 0 0 0">What they saw before booking</p>
          </div>
          <div style="text-align:center;padding:16px 0">
            <a href="https://cal.com/hassan-hai-jegppt/30min"
               style="background:#0c0c0b;color:#fff;padding:12px 28px;border-radius:100px;text-decoration:none;font-size:14px;font-weight:500;display:inline-block">
              View your calendar →
            </a>
          </div>
        </div>
      `,
    })
    results.email = `sent: ${email.data?.id}`
    console.log('✅ Email sent:', email.data?.id)
  } catch (err: any) {
    results.email = `FAILED: ${err?.message}`
    console.error('❌ Email error:', err?.message)
  }

  console.log('Lead results:', results)
  return NextResponse.json({ success: true, results })
}
