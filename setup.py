from setuptools import find_packages, setup

setup(
    name="legal_copilot",
    version=0.1,
    description="Description here",
    license="Apache 2.0",
    packages=find_packages(),
    package_data={},
    scripts=[],
    install_requires=[
        "click",
        "fastapi",
        "uvicorn",
        "openai",
        "python-dotenv",
        "langdetect",
        "textract",
    ],
    extras_require={
        "test": ["pytest", "pylint!=2.5.0", "black", "mypy", "flake8", "pytest-cov"],
    },
    entry_points={
        "console_scripts": [],
    },
    classifiers=[],
    tests_require=["pytest"],
    setup_requires=["pytest-runner"],
    keywords="",
)
