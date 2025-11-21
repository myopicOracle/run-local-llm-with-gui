import OpenAI from 'openai'

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      })
    }

    if (url.pathname === '/generate' && request.method === 'POST') {
      try {
        if (!env.OPENAI_API_KEY) {
          throw new Error('OPENAI_API_KEY not configured')
        }
        const { prompt } = await request.json()
        const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY })
        
        const stream = await openai.chat.completions.create({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: prompt }],
          stream: true,
        })

        const { readable, writable } = new TransformStream()
        const writer = writable.getWriter()
        const encoder = new TextEncoder()

        ctx.waitUntil((async () => {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || ''
            if (content) {
              await writer.write(encoder.encode(`data: ${JSON.stringify({ response: content })}\n\n`))
            }
          }
          await writer.write(encoder.encode('data: [DONE]\n\n'))
          await writer.close()
        })())

        return new Response(readable, {
          headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Access-Control-Allow-Origin': '*',
          },
        })
      } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        })
      }
    }

    return new Response('Not Found', { status: 404 })
  },
}
