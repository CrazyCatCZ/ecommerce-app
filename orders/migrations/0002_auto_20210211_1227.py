# Generated by Django 3.1.5 on 2021-02-11 11:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
        ('products', '0001_initial'),
        ('orders', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Order',
            new_name='OrderProduct',
        ),
    ]