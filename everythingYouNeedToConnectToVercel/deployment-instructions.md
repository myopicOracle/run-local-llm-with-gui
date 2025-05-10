# Deploying Your Ollama Chat Application

This guide will walk you through deploying your Ollama chat application with a frontend hosted on Vercel or Netlify and a backend running locally that connects to your Ollama instance.

## Step 1: Set Up the Project Structure

1. First, create the project directories as shown in the project structure.
2. Copy the provided files into their respective locations.

## Step 2: Install Dependencies

### Backend Setup
```bash
cd backend
npm install
```

### Frontend Setup
```bash
cd frontend
npm install
```

## Step 3: Run the Backend Locally

The backend needs to run on your local machine where Ollama is installed.

1. Make sure Ollama is running:
```bash
ollama serve
```

2. Start the backend server:
```bash
cd backend
npm start
```

Your backend should now be running on http://localhost:5000

## Step 4: Expose the Backend with LocalTunnel

LocalTunnel will create a publicly accessible URL for your local backend:

```bash
cd backend
npm run tunnel
```

This will output a URL like `https://your-subdomain.loca.lt`. **Copy this URL** as you'll need it for the frontend configuration.

## Step 5: Deploy the Frontend

### Option 1: Deploy to Vercel

1. Install Vercel CLI (if needed):
```bash
npm install -g vercel
```

2. Update the environment variable in your frontend:
   - Create a `.env.production` file in the frontend directory
   - Set `REACT_APP_API_URL=https://your-subdomain.loca.lt/api` (use the URL from Step 4)

3. Deploy to Vercel:
```bash
cd frontend
vercel
```

4. Follow the prompts to complete the deployment.

5. After deployment, go to the Vercel dashboard and add the environment variable:
   - `REACT_APP_API_URL=https://your-subdomain.loca.lt/api`

### Option 2: Deploy to Netlify

1. Install Netlify CLI (if needed):
```bash
npm install -g netlify-cli
```

2. Update the environment variable:
   - Create a `.env.production` file in the frontend directory
   - Set `REACT_APP_API_URL=https://your-subdomain.loca.lt/api` (use the URL from Step 4)

3. Build your app:
```bash
cd frontend
npm run build
```

4. Deploy to Netlify:
```bash
netlify deploy
```

5. After testing the draft URL, deploy to production:
```bash
netlify deploy --prod
```

6. Add the environment variable in the Netlify dashboard:
   - `REACT_APP_API_URL=https://your-subdomain.loca.lt/api`

## Step 6: Update Backend CORS Settings

Once your frontend is deployed, update the backend's `.env` file with your frontend URL:

```
FRONTEND_URL=https://your-app.vercel.app
```

Restart your backend server:
```bash
cd backend
npm start
```

## Step 7: Testing the Deployment

1. Visit your deployed frontend URL
2. Ensure the "Connected to LLM" status appears
3. Try sending a prompt to verify that everything works

## Important Notes

### Keeping the Backend Running

For your application to work, you need:
1. Ollama running on your local machine
2. The backend Express server running
3. LocalTunnel running to expose your backend

Consider using a tool like [PM2](https://pm2.keymetrics.io/) to keep your backend processes running:

```bash
npm install -g pm2
pm2 start server.js --name ollama-backend
pm2 start "npm run tunnel" --name ollama-tunnel
```

### Security Considerations

The LocalTunnel exposes your backend to the internet. While convenient, it has some security implications:

1. Anyone with the tunnel URL can access your backend
2. The tunnel URL changes each time you restart LocalTunnel

For a more permanent solution, consider:
- Using a dedicated VPS to host both the frontend and backend
- Setting up authentication for your API
- Using a fixed subdomain with LocalTunnel: `lt --port 5000 --subdomain your-chosen-name`

## Troubleshooting

### Connection Issues
- Make sure Ollama is running on your machine
- Verify that the backend server is running
- Check that the LocalTunnel is active and the URL is correctly set in your frontend

### CORS Errors
- Ensure the `FRONTEND_URL` in your backend `.env` file matches your deployed frontend URL
- Try temporarily setting `origin: '*'` in the CORS configuration for testing

### Deployment Issues
- Check the build logs in Vercel/Netlify
- Verify that environment variables are correctly set
- Try a clean rebuild if you encounter persistent issues