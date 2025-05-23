# 3 Ways to Ollama: A Beginner's Guide to the Galaxy

This repository contains a simple setup to run Ollama in three ways: 

```
1. CLI
2. Local GUI with Node.js server
3. Remote GUI with ngrok/Vercel 
```

> **Caveat: good for testing/prototyping only, not public access. No additional security measures implemented, amplifying security risk when using the ngrok tunnel.**


See below for video walkthroughs, split into 3 parts. 

> [Part 1 | Your Local LLM: The Ollama CLI](https://vimeo.com/1085175035?share=copy)

> [Part 2 | Local LLM with a GUI ( Node.js & Express )](https://vimeo.com/1085175341?share=copy)

> [![Part 3 | Remote Access for Your Local LLM ( ngrok && Vercel )](assets/thumbnail.png)](https://vimeo.com/1087023539?share=copy)

## Ollama Setup Guide

Three ways to run Ollama for local LLMs: CLI, local GUI with Node.js, and remote GUI with Vercel.

### CLI

1. **Download and Install**
   - Get Ollama from [ollama.com](https://ollama.com) and run the installer.
   - Verify it’s running in your task manager.

   ![Verify Installation](https://cdn.loom.com/sessions/picture-in-scripture/b718f03ebf9a40fa87cc36efc74023e0-731.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4ubG9vbS5jb20vc2Vzc2lvbnMvcGljdHVyZS1pbi1zY3JpcHR1cmUvYjcxOGYwM2ViZjlhNDBmYTg3Y2MzNmVmYzc0MDIzZTAtNzMxLmpwZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0ODEwODQ0M319fV19&Key-Pair-Id=KQOSYIR44AIC0&Signature=SXNzKDhyzXz0k-8Dws11EC4pXVKG%7EBlTj0u-JEgi%7EO75Yq7cQ%7EfjAQOO5EVX84t6muwUBeEVnLJDTTHNDcIDsixJGNkHOqk9oYNX1CeDZcrViisjf1yEZX8UraafLfc1r1Fp-NyHNJ28fOjBM1NMlXFo73uu%7EDqpeupPGkLnBMWSgqgHZpcquOR4vMPLUGhaw1CPb6c7oH47xkMdMIH0vAxj7Hz5k4MWw-2sajAF0g64TIZZxIq4FStZSC4Zr8xpjS0MRGK4bkUZ0NioW0BdZN8vPNUaSqZQjbJIzoFMR2nVdBlPE7UqX-AHwWDzRWxrTy4hUh8ks7sOEluWt7DZ-Q__)
   *Screenshot: Verifying installation*

2. **Run a Model**
   - Start a model:
     ```bash
     ollama run <model_name>
     ```

   ![Running a Model](https://cdn.loom.com/sessions/picture-in-scripture/b718f03ebf9a40fa87cc36efc74023e0-789.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4ubG9vbS5jb20vc2Vzc2lvbnMvcGljdHVyZS1pbi1zY3JpcHR1cmUvYjcxOGYwM2ViZjlhNDBmYTg3Y2MzNmVmYzc0MDIzZTAtNzg5LmpwZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0ODEwODQ0M319fV19&Key-Pair-Id=KQOSYIR44AIC0&Signature=hnFfmoLRY4jTKnhSCZJ7QJ-l7LdybMGBFXVzQqyrvo8F2OKdJ-LbO0MI0pZmT4L7qbgekHzZZp7WblItBBxDsqaE1YmFrh7yxnlKZ0jgwTTGwQpmJgq22ISR%7EbQtxZuymdjE1GoC8kv5wPs-oDYz6EGFG0gZYGR7Q2hNumpio6gUKaYAA---vc3tdOFq73hCS24Pir8qCfTvk7bpC5eXWyaBjhOeaLCghYF%7E-Qw96XzeNdO6G8rPcQ0kGa7056WUjifMoRbronN4RhG7VsqGh6zU9vYl848ROe8CP-8hz2olTGWihyESoDA5CJjljrgU%7EUC0cu0uFPIOXrYqs8Fz8Q__)
   *Screenshot: Running a model*

3. **Manage Models**
   - Download a model:
     ```bash
     ollama pull <model_name>
     ```
   - List models:
     ```bash
     ollama list
     ```
   - Exit session:
     ```bash
     /buy
     ```

### Local GUI with Node.js

1. **Set Up Backend**
   - Create and navigate to a directory:
     ```bash
     mkdir backend
     cd backend
     npm init -y
     npm install express axios
     ```
   - Create `server.js` (see repo).

   ![Node.js Setup](https://cdn.loom.com/sessions/picture-in-scripture/b718f03ebf9a40fa87cc36efc74023e0-1089.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4ubG9vbS5jb20vc2Vzc2lvbnMvcGljdHVyZS1pbi1zY3JpcHR1cmUvYjcxOGYwM2ViZjlhNDBmYTg3Y2MzNmVmYzc0MDIzZTAtMTA4OS5qcGciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3NDgxMDg0NDN9fX1dfQ__&Key-Pair-Id=KQOSYIR44AIC0&Signature=EoUQ3DcaSotQNWERwa2xCCrHkXzSyBm7o2jKwbldOMHuMI3z%7E1MSdO%7EonpzqYoR4N1DuhEPWX1Fck7VU1YKXg3lAv3Q9J9Zsgm-eDmoUWXcjsIPPHRi673Pjw7HusIFr-iTXtQn63Fk3lJanfXTROPG2Qtt9IJehp1KQ%7Eo4d3in3SzlMjcAJ8g0Z1ijZMebdqTmGJfkPYtG90XkO9FyJnVkc6xXJMLDC7g%7EX-Wc9Vl1vbfiGb4DvDAzBCeT6nCJXP3MZmkOz6mQz%7E37lhiOl4dXk-XzAHUTBQ9J4ibHq13LWrQmzcP1xUM6FYN2VQ9TrvH00FSZQmiJDkEAWy6VLeA__)
   *Screenshot: Setting up Node.js*

2. **Start Servers**
   - Run Ollama server:
     ```bash
     ollama serve
     ```
   - Run Node server:
     ```bash
     node server.js
     ```

   ![Node Server Running](https://cdn.loom.com/sessions/picture-in-scripture/b718f03ebf9a40fa87cc36efc74023e0-1478.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4ubG9vbS5jb20vc2Vzc2lvbnMvcGljdHVyZS1pbi1zY3JpcHR1cmUvYjcxOGYwM2ViZjlhNDBmYTg3Y2MzNmVmYzc0MDIzZTAtMTQ3OC5qcGciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3NDgxMDg0NDR9fX1dfQ__&Key-Pair-Id=KQOSYIR44AIC0&Signature=kajsWuRtpgDFcS5RyiZNLMoFdPdpdrJ5ZZDQnoi3Cv%7E1cnertwC8ci1uMqwPgGPIe-D3J3mbN27vLzy4-e3LMxYY6EZvVv07u9rtGpCXI%7EpWfSowJ8Ugymx40WasHj9bZXNX4heFQQo4JzE1rj%7ElU9XUwwW0P5zkLF76zxEOg6TBNeyyV0i-aXX%7EgDkFTiI2rLZ1gHPcNjzzB6tWd6fWsyiQp00H5ADdDVqwwvKDbaLaafZhQ-Ts40JnIX8LRqlIiLVDcrvv5bZSLMtGARxCTaPm8QwsYn0gfP4sFDi833RbXsjMfl0udj%7Eq-J4icIgDUNu7XDrCXtB1i1aEm08Miw__)
   *Screenshot: Node server running*

3. **Add Frontend**
   - Create `public/index.html` (see repo).
   - Open `http://localhost:5000`.

### Remote GUI with Vercel

1. **Expose Local Server**
   - Run ngrok:
     ```bash
     ngrok http 5000
     ```
   - Note the ngrok URL.

   ![ngrok Setup](https://cdn.loom.com/sessions/picture-in-scripture/b718f03ebf9a40fa87cc36efc74023e0-4501.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4ubG9vbS5jb20vc2Vzc2lvbnMvcGljdHVyZS1pbi1zY3JpcHR1cmUvYjcxOGYwM2ViZjlhNDBmYTg3Y2MzNmVmYzc0MDIzZTAtNDUwMS5qcGciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3NDgxMDg0NDR9fX1dfQ__&Key-Pair-Id=KQOSYIR44AIC0&Signature=Yf1WTASx80AFFo4IvTjZHGCNYH65m8hEmt8YJEdx%7EqlE545WY%7E1ypGGuRl986jku8Zb-nB2n9VpPgDrnHjrzqbc4WPmljQBlMJFwO5F0eLJ3xDlPDeEOd%7ErkCWNCL4hq%7E0O19BeZcLYgFxBhFihVESai-eqgHey%7EgRJUYqBVsTqucAV0WfTHDkvhXscaBqdOFDM0RpsAuekh90VrRYifmFNTNIc7D2diazG3c3GdmsZ1C0c7M10ztZp8VVfQmM%7E91oKZHvM5Olw49BbLPRhD%7ElMfx5HyEMPbLhMTsf6-JXfZdl5n88IOhDXpt7kewldwqSEgywCmsPz2uZxQAv5NhQ__)
   *Screenshot: Setting up ngrok*

2. **Update Frontend**
   - Modify frontend to use ngrok URL (see repo).

3. **Deploy on Vercel**
   - Push frontend to GitHub.
   - Deploy via Vercel.

4. **Test Remote GUI**
   - Access Vercel URL to interact with Ollama.

   ![Remote GUI Test](https://cdn.loom.com/sessions/picture-in-scripture/b718f03ebf9a40fa87cc36efc74023e0-6630.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4ubG9vbS5jb20vc2Vzc2lvbnMvcGljdHVyZS1pbi1zY3JpcHR1cmUvYjcxOGYwM2ViZjlhNDBmYTg3Y2MzNmVmYzc0MDIzZTAtNjYzMC5qcGciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3NDgxMDg2MDJ9fX1dfQ__&Key-Pair-Id=KQOSYIR44AIC0&Signature=l74%7EOFILhvJqpViype%7EyiHoxkqAAiKQiB7lkWbQLRUw5lxhK6Lfn4SufRWVOaTs6HvTQhv5KDGS6%7E--nMEMO-sXrQx8WZR1k3b28mxJOBBHDUCfKqJsFaFHIFLZqW7Nqt3xV0M-hL0Zkxj7E-qrOkzxZ5qbSBtWqGor3AonrQOtfLljxlILv35JBIss-tWoYf816Illb0W1JQLe4NP%7EUpEPgWhYTkLn31-gwu0A3%7EXziTl4wJskSyHC71ebOMIzjGvI9jxPy2a%7EhkyydjF%7EM5jji3-KR3GAOLQviU0iExDTfnuOIbjKLlgxIirapuy1UIJJOKPjVkSNY00II7-tE8A__)
   *Screenshot: Testing remote GUI*

---

*last repo update: May 17, 2025*