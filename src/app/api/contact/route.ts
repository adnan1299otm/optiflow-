import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiting (max 10 submissions per IP per hour)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userData = rateLimitMap.get(ip);

  if (!userData) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 3600000 });
    return true;
  }
  if (now > userData.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 3600000 });
    return true;
  }
  if (userData.count >= 10) return false;
  userData.count += 1;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const {
      service,
      subService,
      aiSubType,
      company,
      website,
      industry,
      audience,
      goal,
      budget,
      timeline,
      name,
      email,
      whatsapp,
      contactMethod,
      notes,
    } = body;

    // Validate required fields
    if (
      !service ||
      !budget ||
      !timeline ||
      !name ||
      !email ||
      !whatsapp ||
      !industry ||
      !goal
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // ─────────────────────────────────────────────────────────────
    // Google Sheets via Apps Script Web App URL
    // Only needs: GOOGLE_SHEETS_WEBAPP_URL in environment variables
    // ─────────────────────────────────────────────────────────────
    const webAppUrl = process.env.GOOGLE_SHEETS_WEBAPP_URL;

    if (webAppUrl) {
      const payload = {
        name:          name,
        email:         email,
        whatsapp:      whatsapp,
        service:       service,
        subService:    subService    || '',
        aiSubType:     aiSubType     || '',
        company:       company       || '',
        website:       website       || '',
        industry:      industry,
        audience:      audience      || '',
        goal:          goal,
        budget:        budget,
        timeline:      timeline,
        contactMethod: contactMethod || '',
        notes:         notes         || '',
      };

      const sheetsResponse = await fetch(webAppUrl, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      });

      if (!sheetsResponse.ok) {
        // Log but don't fail — we still return success to user
        console.error(
          '[Sheets error]',
          sheetsResponse.status,
          await sheetsResponse.text()
        );
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('[contact API error]', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
