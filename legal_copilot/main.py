import os

import openai
import uvicorn
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
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


origins = [
    "http://localhost:*",
    "http://localhost:3000",
    "https://pollinations.ai",
    "https://*.pollinations.ai",
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"healthy": "yes"}


gpt_template = """Explain the following legal paragraph in simple English: "In the event of a Conversion the Lender is obliged vis-à-vis each of the Shareholders without undue delay (i) to properly subscribe for the new shares of the Company, (ii) to pay the nominal amount of the new shares of the Company in cash, and (iii) to assign its claim for (re)payment of the Conversion Amount to the Company as contribution to the free capital reserves of the Company within the meaning of Sec. 272 para. 2 no. 4 of the German Commercial Code. The new shares of the Lender shall have the same rights and preferences as the share created in connection with a Qualified Financing Round. New shares created in connection with a Forced Conversion shall have the same rights and preferences as the most senior shares of the Company existing at the date of the Forced conversion."

The legal paragraph describes what will happen if the company decides to convert its debt into equity. In this event, the lender is required to subscribe for the new shares of the company, pay the nominal amount of the new shares in cash, and assign its claim for repayment of the conversion amount to the company. The new shares of the lender will have the same rights and preferences as the shares created in connection with a qualified financing round.

Explain the following legal paragraph in simple English: "bla bla bla"

The provided text is not a legal text.

Explain the following legal paragraph in simple English: "it's so hot"

The provided text is not a legal text.

Explain the following legal paragraph in simple English: {}""".format


@app.post("/legal")
async def legal(legal_text: LegalText) -> SimpleText:
    legal_text.original = legal_text.original.replace("\n", " ")
    response = openai.Completion.create(
        model="text-davinci-002",
        prompt=gpt_template(legal_text.original),
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
