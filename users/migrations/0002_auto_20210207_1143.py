# Generated by Django 3.1.5 on 2021-02-07 10:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='session_id',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]