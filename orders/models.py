from django.db import models
from users.models import User
from products.models import Product


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    def calculate_total_price(self):
        return self.quantity * self.product.price

    def __str__(self):
        return f'{self.quantity} amount of {self.product.title} from {self.user.username}'

