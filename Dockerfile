FROM python
WORKDIR /opt/app
COPY ./resume.md .
COPY ./resume.py .
COPY ./resume.css .
RUN pip install markdown weasyprint flask && python resume.py && weasyprint resume.html resume.pdf && mkdir static && \
mv resume.html ./static/resume.html && mv resume.css ./static/resume.css && mv resume.pdf ./static/resume.pdf
COPY ./app.py .
EXPOSE 5000
ENTRYPOINT ["python"]
CMD ["app.py"]