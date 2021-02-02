from django.db import models
from django.contrib.auth.models import User


CATEGORY_CHOICES = (
    ('clothing', 'clothing'),
)

LABEL_CHOICES = (
    ('New', 'New'),
    ('Bestseller', 'Bestseller'),
)

LABEL_COLORS = (
    ('blue', 'blue'),
    ('red', 'red'),
)


class Product(models.Model):
    title = models.CharField(max_length=20)
    category = models.CharField(max_length=15, choices=CATEGORY_CHOICES)
    price = models.IntegerField()
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='frontend/assets/images', default='default.jpg')
    imageName = models.CharField(max_length=20, default='default.jpg')
    label = models.CharField(
        max_length=10, choices=LABEL_CHOICES, blank=True, null=True
    )
    label_color = models.CharField(
        max_length=10, choices=LABEL_COLORS, blank=True, null=True
    )

    def __str__(self):
        return self.title
