# Generated by Django 3.1.5 on 2021-02-07 16:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0007_auto_20210204_1730'),
        ('orders', '0006_auto_20210207_1143'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='product',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='products.product'),
        ),
    ]
