FROM python:3.11

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

RUN mkdir /djangosite
COPY djangosite /djangosite
WORKDIR /djangosite

RUN pip install --upgrade pip
RUN pip install -r ./requirements.txt

RUN chmod +x /djangosite/docker-entrypoint.sh

CMD ["/bin/bash", "/djangosite/docker-entrypoint.sh"]