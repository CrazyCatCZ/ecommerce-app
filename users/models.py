from django.db import models
from django.contrib.auth.models import AbstractUser


class Customer(models.Model):
    session_id = models.CharField(unique=True, max_length=100)

    def __str__(self):
        return self.session_id


class CustomUser(AbstractUser):
    customer = models.ForeignKey(
        Customer, blank=True, null=True, on_delete=models.SET_NULL
    )