from django.db import models
from users.models import Customer
from products.models import Product


class OrderProduct(models.Model):
    customer = models.ForeignKey(Customer, blank=True, null=True, on_delete=models.SET_NULL)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    def calculate_total_price(self):
        return self.quantity * self.product.price

    def __str__(self):
        user = self.customer

        if user is not None:
            if self.user.username:
                username = self.user.username
            else:
                username = self.user.session_id
        else: 
            username = '-'

        return f'{self.quantity} amount of {self.product.title} from {username}'