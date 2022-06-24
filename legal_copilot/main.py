import os

import openai
import uvicorn
from dotenv import load_dotenv
from fastapi import FastAPI
from pydantic import BaseModel

load_dotenv()
openai.api_key = os.getenv("OPENAI_ACCESS_KEY")


app = FastAPI()


class LegalText(BaseModel):
    original: str
    language: str = "en"


class SimpleText(BaseModel):
    original: str
    language: str = "en"
    simple: str


app = FastAPI()


@app.get("/")
async def root():
    return {"healthy": "yes"}


@app.post("/legal")
async def legal(legal_text: LegalText) -> SimpleText:
    response = openai.Completion.create(
        model="text-davinci-002",
        prompt=f'Explain the following legal paragraph in simple English: "{legal_text.original}"',
        temperature=0.7,
        max_tokens=256,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0,
    )
    return SimpleText(
        original=legal_text.original,
        language=legal_text.language,
        simple=response.choices[0].text,
    )


def main():
    """
    Run the server.
    """
    uvicorn.run(app, host="0.0.0.0", port=5000)


if __name__ == "__main__":
    main()
