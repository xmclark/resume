FROM python
WORKDIR /opt/app
COPY ./resume.md .
COPY ./resume.py .
COPY ./resume.css .
RUN pip install markdown weasyprint && python resume.py && weasyprint resume.html resume.pdf
EXPOSE 8000
ENTRYPOINT ["python3", "-m", "http.server"]
