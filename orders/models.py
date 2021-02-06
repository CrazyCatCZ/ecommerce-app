from django.db import models
from users.models import User, Customer
from products.models import Product


class Order(models.Model):
    customer = models.ForeignKey(Customer, blank=True, null=True, on_delete=models.SET_NULL)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    def calculate_total_price(self):
        return self.quantity * self.product.price

    def __str__(self):
        if self.customer.user:
            username = self.customer.user.username
        else: 
            username = self.customer.session_id

        return f'{self.quantity} amount of {self.product.title} from {username}'

