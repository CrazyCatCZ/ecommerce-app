from django.db import models
from users.models import Customer, CustomUser
from products.models import Product


class OrderProduct(models.Model):
    customer = models.ForeignKey(Customer, blank=True, null=True, on_delete=models.SET_NULL)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    def calculate_total_price(self):
        return self.quantity * self.product.price

    def __str__(self):
        customer = self.customer
        
        if customer:
            customer = self.customer.session_id
        else:
            customer = '-'

        return f'{self.quantity} amount of {self.product.title} from {customer}'


class Order(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product)
    date = models.CharField(max_length=50)

    def __str__(self):
        return f'Order from {self.user.username}'
