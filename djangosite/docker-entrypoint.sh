#!/bin/bash
python3 /djangosite/manage.py makemigrations
python3 /djangosite/manage.py migrate
python3 /djangosite/manage.py runserver 0.0.0.0:8000
