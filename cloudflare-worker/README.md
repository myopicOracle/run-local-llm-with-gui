# Cloudflare Worker with OpenAI

This Cloudflare Worker provides an OpenAI-powered chat endpoint, replacing the local Ollama setup with cloud-based AI.

## Architecture

```
React Frontend → Cloudflare Worker → OpenAI API
```

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.dev.vars` file for local development:

```bash
OPENAI_API_KEY=sk-proj-...
```

### 3. Test Locally

```bash
npm run dev
```

### 4. Deploy to Cloudflare

```bash
npm run deploy
```

After deployment, you'll receive a Worker URL like:
`https://general-chat-endpoint.your-subdomain.workers.dev`

### 5. Set Production Environment Variable

In Cloudflare Dashboard:
1. Go to Workers & Pages
2. Select your worker
3. Go to Settings → Variables
4. Add `OPENAI_API_KEY` with your OpenAI API key (encrypt as secret)

## Usage

The worker exposes a single endpoint:

**POST /generate**

Request body:
```json
{
  "prompt": "Your prompt here"
}
```

Response: Server-Sent Events (SSE) stream

## Notes

- Uses OpenAI's `gpt-4o-mini` model (fast and cost-effective)
- Streams responses in SSE format compatible with the frontend
- CORS is enabled for all origins
- No local setup required - fully cloud-based
