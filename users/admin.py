from django.contrib import admin
from .models import CustomUser, Customer

admin.site.register(Customer)
admin.site.register(CustomUser)
