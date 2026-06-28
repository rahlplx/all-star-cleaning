interface Env {
  AI: Ai;
}

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface RequestBody {
  message: string;
  history?: ChatMessage[];
  locale?: string;
}

const SYSTEM_PROMPT = `You are the AI assistant for All Star Cleaning, an exterior cleaning company serving 44 Ottawa-area locations.

Services offered:
- Window Cleaning (Nettoyage de vitres)
- Gutter Cleaning (Nettoyage de gouttières)
- Pressure Washing (Lavage sous pression)
- Siding Cleaning (Nettoyage de revêtement)
- Snow Removal (Déneigement)

Key areas served: Barrhaven, Kanata, Nepean, Gloucester, Orleans, Stittsville, Manotick, Riverside South, Greely, and 35+ more Ottawa communities.

Phone: (613) 314-3300
Email: hello@allstarcleaning.ca
Hours: Monday to Sunday, 9AM–7PM

IMPORTANT: Always respond with valid JSON in exactly one of these formats:
{"type":"text","content":"your message here"}
{"type":"service_card","name":"Window Cleaning","description":"brief description","url":"/en/services/window-cleaning"}
{"type":"location_list","locations":[{"name":"Barrhaven","url":"/en/area/barrhaven"},{"name":"Kanata","url":"/en/area/kanata"}]}
{"type":"contact_card","phone":"(613) 314-3300","email":"hello@allstarcleaning.ca","cta":"Get a Free Quote"}

Rules:
- Use service_card when user asks about a specific service
- Use location_list when user asks about areas or locations (include 4-6 relevant ones)
- Use contact_card when user asks about contacting, pricing, or booking
- Use text for general questions and greetings
- Be brief and friendly
- Answer in the same language the user writes in (English or French)
- For French responses, use /fr/ URLs instead of /en/`;

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  // CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  try {
    const body: RequestBody = await request.json();
    const { message, history = [], locale = 'en' } = body;

    if (!message || typeof message !== 'string') {
      return Response.json({ type: 'text', content: 'Please provide a message.' }, { status: 400 });
    }

    const urlLocale = locale === 'fr' ? 'fr' : 'en';
    const systemPrompt = SYSTEM_PROMPT.replace(/\/en\//g, `/${urlLocale}/`);

    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      ...history.slice(-6),
      { role: 'user', content: message },
    ];

    const response = await env.AI.run('@cf/meta/llama-3-8b-instruct', { messages });

    let parsed: Record<string, unknown>;
    try {
      const raw = (response as { response?: string }).response || '';
      // Extract JSON from potential markdown code blocks
      const jsonMatch = raw.match(/\{[\s\S]*\}/);
      parsed = jsonMatch ? JSON.parse(jsonMatch[0]) : { type: 'text', content: raw };
    } catch {
      parsed = { type: 'text', content: (response as { response?: string }).response || '' };
    }

    return Response.json(parsed, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    const fallback = { type: 'contact_card', phone: '(613) 314-3300', email: 'hello@allstarcleaning.ca', cta: 'Get a Free Quote' };
    return Response.json(fallback, {
      status: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  }
};
