# Generated by Django 3.1.5 on 2021-02-11 12:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0002_auto_20210211_1227'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orderproduct',
            name='ordered',
        ),
    ]
