import requests

text = """In order to avoid the insolvency of the
Company within the meaning of section.
17 para. 2 of the German Insolvency
Statute (“InsO”) and over-indebtedness
of the Company within the meaning of
section 19 para. 2 InsO the Lender
subordinates towards the Company all
current and future claims arising from
this Agreement including repayment and
interest (“Subordinated Claims”)
according to section 39 para. 2 German
Insolvency Code to all present and future
claims of present and future creditors of
the Company, except for the claims of the
other lenders under the other Agreements
of the Convertible Loan Financing
Round, in particular to claims as set forth
in section 39 para. 1 n. 1 to 5 InsO. The
claims of all lenders of the Convertible
Loan Financing Round shall rank
equally."""


def test_localhost() -> None:
    response = requests.post(
        "http://localhost:5000/legal/",
        json={"original": text},
    )
    assert response.status_code == 200
    print(response.json()["simple"])


if __name__ == "__main__":
    test_localhost()
