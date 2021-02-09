from django.db import models
from django.contrib.auth.models import AbstractUser


class Customer(models.Model):
    session_id = models.CharField(unique=True, max_length=100)

    def __str__(self):
        if self.user:
            return self.user.username
        else:
            return self.session_id
