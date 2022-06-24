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
curl -X POST localhost:5000/legal -H "Content-Type: application/json" \
    -d '{"original": "bla bla"}
```