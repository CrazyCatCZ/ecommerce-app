import os
from django.contrib import admin
from graphene_django.views import GraphQLView
from graphql_jwt.decorators import jwt_cookie
from django.urls import path, re_path
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt

ADMIN_PATH = os.environ.get('ECOMMERCE_APP_ADMIN_PATH')

urlpatterns = [
    path(f'{ADMIN_PATH}/', admin.site.urls),
    path('graphql/', jwt_cookie(GraphQLView.as_view(graphiql=False))),
    path('robots.txt', TemplateView.as_view(template_name='static/text/robots.txt')),
    re_path('.*', TemplateView.as_view(template_name='index.html')),
]
