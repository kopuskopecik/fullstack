# Generated by Django 4.2.1 on 2023-06-01 08:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_alter_shopping_amount'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='shopping',
            options={'ordering': ['status']},
        ),
    ]