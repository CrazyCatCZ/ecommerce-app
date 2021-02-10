from django.db import models
from django.contrib.auth.models import User


class Customer(models.Model):
    user = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)
    session_id = models.CharField(unique=True, max_length=100)

    def __str__(self):
        if self.user:
            return self.user.username
        else:
            return self.session_id
