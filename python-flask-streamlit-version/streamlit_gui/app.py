import streamlit as st
import requests

st.set_page_config(page_title="Intelli-G v1.0")
st.title("Gary's Super AI Model")

prompt = st.text_area("Enter your prompt:", height=150)

if st.button("Submit"):
    if not prompt.strip():
        st.warning("Please enter a prompt.")
    else:
        with st.spinner("Waiting on the model…"):
            try:
                r = requests.post(
                    "http://localhost:5000/predict",
                    json={"prompt": prompt},
                    timeout=60  # ← Match or exceed Flask timeout
                )
                r.raise_for_status()
                result = r.json()
                if result.get("error"):
                    st.error(f"API error: {result['error']}")
                else:
                    st.markdown("**Response:**")
                    st.write(result.get("response", ""))
            except Exception as err:
                st.error(f"Request failed: {err}")

# streamlit run streamlit_gui/app.py
