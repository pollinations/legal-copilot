# legal-copilot

Transform legal texts into simple English using GPT-3

Example:

## Development


```sh
# Install dependencies
pip install -e ".[test]"

# Install pre-commit hooks
brew install pre-commit
pre-commit install -t pre-commit
cp .env.example .env
```

and run the server:
```
python legal_copilot/main.py 
```
Or build an run the image:
```
docker build -t legal_copilot .
docker run -p 5000:5000 --env-file .env legal_copilot
```

# Requests

```
curl -X POST localhost:5000/legal -H "Content-Type: application/json"\
    -d '{"original": "In order to avoid the insolvency of the
Company within the meaning of section.
17 para. 2 of the German Insolvency
Statute (\"InsO\") and over-indebtedness
of the Company within the meaning of
section 19 para. 2 InsO the Lender
subordinates towards the Company all
current and future claims arising from
this Agreement including repayment and
interest (\"Subordinated Claims\")
according to section 39 para. 2 German
Insolvency Code to all present and future
claims of present and future creditors of
the Company, except for the claims of the
other lenders under the other Agreements
of the Convertible Loan Financing
Round, in particular to claims as set forth
in section 39 para. 1 n. 1 to 5 InsO. The
claims of all lenders of the Convertible
Loan Financing Round shall rank
equally."}'
```