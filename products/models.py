from django.db import models

CATEGORY_CHOICES = (
    ('clothing', 'clothing'),
    ('notebooks', 'notebooks'),
    ('computers', 'computers'),
    ('smartphones', 'smartphones'),
    ('tablets', 'tablets'),
    ('headphones', 'headphones'),
    ('cameras', 'cameras'),
    ('test', 'test'),
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
    image = models.ImageField(upload_to='public/assets', default='default.jpg')
    image_name = models.CharField(max_length=50, default='default.jpg')
    label = models.CharField(
        max_length=10, choices=LABEL_CHOICES, blank=True, null=True
    )
    label_color = models.CharField(
        max_length=10, choices=LABEL_COLORS, blank=True, null=True
    )
    include = models.BooleanField(default=True)

    def __str__(self):
        return self.title
