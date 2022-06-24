FROM python:3.9
WORKDIR /app
COPY . /app
RUN apt-get install python-dev libxml2-dev libxslt1-dev antiword unrtf poppler-utils pstotext tesseract-ocr \
flac ffmpeg lame libmad0 libsox-fmt-mp3 sox libjpeg-dev swig
RUN pip install .
CMD ["python", "legal_copilot/main.py", "--host", "0.0.0.0", "--port", "5000"]