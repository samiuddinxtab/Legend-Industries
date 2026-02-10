interface Env {
  TURNSTILE_SECRET_KEY: string;
  MAILCHANNELS_FROM_EMAIL: string;
  MAILCHANNELS_TO_EMAIL: string;
  MAILCHANNELS_FROM_NAME?: string;
}

type TurnstileResponse = {
  success: boolean;
  'error-codes'?: string[];
};

const RATE_WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;
const ipRequests = new Map<string, { count: number; expiresAt: number }>();

const requiredFields = [
  'name',
  'organization',
  'phone',
  'email',
  'quantity',
  'category',
  'branding',
  'delivery',
] as const;

function json(status: number, payload: Record<string, unknown>) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

function normalize(value: FormDataEntryValue | null) {
  return typeof value === 'string' ? value.trim() : '';
}

function hasBulkContext(quantity: string) {
  const lowered = quantity.toLowerCase();
  const numberMatch = lowered.match(/\d+/g);
  const numbers = numberMatch ? numberMatch.map(Number) : [];

  if (numbers.some((n) => n >= 10)) return true;

  return ['bulk', 'moq', 'hundred', 'dozen', 'lots', 'range'].some((token) => lowered.includes(token));
}

function hasContextDetails(values: Record<string, string>) {
  return values.branding.length >= 8 && values.category.length >= 2 && values.delivery.length >= 2;
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = ipRequests.get(ip);

  if (!current || current.expiresAt <= now) {
    ipRequests.set(ip, { count: 1, expiresAt: now + RATE_WINDOW_MS });
    return false;
  }

  current.count += 1;
  if (current.count > MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  ipRequests.set(ip, current);
  return false;
}

async function verifyTurnstile(token: string, ip: string, secret: string) {
  const body = new URLSearchParams({
    secret,
    response: token,
    remoteip: ip,
  });

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body,
  });

  if (!response.ok) return { success: false, 'error-codes': ['verification-request-failed'] } as TurnstileResponse;

  return (await response.json()) as TurnstileResponse;
}

async function sendMail(values: Record<string, string>, env: Env) {
  const fromName = env.MAILCHANNELS_FROM_NAME || 'Legend Industries Website';

  return fetch('https://api.mailchannels.net/tx/v1/send', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: env.MAILCHANNELS_TO_EMAIL }],
        },
      ],
      from: {
        email: env.MAILCHANNELS_FROM_EMAIL,
        name: fromName,
      },
      reply_to: {
        email: values.email,
        name: values.name,
      },
      subject: 'Qualified bulk enquiry - Legend Industries',
      content: [
        {
          type: 'text/plain',
          value: [
            'New enquiry received',
            '',
            `Name: ${values.name}`,
            `Organization/Requirement type: ${values.organization}`,
            `Phone: ${values.phone}`,
            `Email: ${values.email}`,
            `Estimated quantity range: ${values.quantity}`,
            `Category requirement: ${values.category}`,
            `Customization and branding requirement: ${values.branding}`,
            `Delivery location: ${values.delivery}`,
          ].join('\n'),
        },
      ],
    }),
  });
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const ip = request.headers.get('cf-connecting-ip') || 'unknown';

  if (isRateLimited(ip)) {
    return json(429, { ok: false, error: 'rate_limited' });
  }

  const formData = await request.formData();

  const honeypot = normalize(formData.get('website'));
  if (honeypot) {
    return json(400, { ok: false, error: 'invalid_submission' });
  }

  const turnstileToken = normalize(formData.get('cf-turnstile-response'));
  if (!turnstileToken) {
    return json(400, { ok: false, error: 'turnstile_missing' });
  }

  const turnstileCheck = await verifyTurnstile(turnstileToken, ip, env.TURNSTILE_SECRET_KEY);
  if (!turnstileCheck.success) {
    return json(400, { ok: false, error: 'turnstile_failed', details: turnstileCheck['error-codes'] || [] });
  }

  const values = Object.fromEntries(requiredFields.map((field) => [field, normalize(formData.get(field))])) as Record<string, string>;

  const missing = requiredFields.filter((field) => !values[field]);
  if (missing.length > 0) {
    return json(400, { ok: false, error: 'validation_failed', missing });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(values.email)) {
    return json(400, { ok: false, error: 'invalid_email' });
  }

  if (!hasBulkContext(values.quantity)) {
    return json(400, { ok: false, error: 'bulk_context_required' });
  }

  if (!hasContextDetails(values)) {
    return json(400, { ok: false, error: 'insufficient_context' });
  }

  const mailResponse = await sendMail(values, env);
  if (!mailResponse.ok) {
    return json(502, { ok: false, error: 'delivery_failed' });
  }

  return json(200, { ok: true });
};

export const onRequestGet: PagesFunction = async () => {
  return json(405, { ok: false, error: 'method_not_allowed' });
};
