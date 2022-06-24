const API_URL = "https://legal-worker.pollinations.ai/legal"

async function fetchTranslation(original_text) {
    try {
      const response = await fetch(
          API_URL, { 
          method: "POST",
          mode: 'cors',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "original": original_text
          })
        }
      );
      const data = await response.json();
      return data
    } catch (error) {
      return error
    }
}

export default fetchTranslation