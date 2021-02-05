from django.contrib import admin
from graphene_django.views import GraphQLView
from graphql_jwt.decorators import jwt_cookie
from django.urls import path, re_path
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt

class CustomGraphQLView(GraphQLView):  
    def dispatch(self, request, *args, **kwargs):
        response = super(CustomGraphQLView, self).dispatch(request, *args, **kwargs)
        return response


urlpatterns = [
    path('admin/', admin.site.urls),
    path('graphql/', csrf_exempt(jwt_cookie(CustomGraphQLView.as_view(graphiql=True)))),
    path('robots.txt', TemplateView.as_view(template_name='robots.txt')),
    re_path('.*', TemplateView.as_view(template_name='index.html')),
]
