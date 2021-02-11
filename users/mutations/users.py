import graphene
from django import forms
from graphene_django import DjangoObjectType
from django.contrib.auth.forms import UserCreationForm
from graphene_django.forms.mutation import DjangoModelFormMutation
from django.contrib.auth import authenticate, login, logout
from graphql_jwt.decorators import login_required

from users.models import CustomUser, Customer


class UserType(DjangoObjectType):
    class Meta:
        model = CustomUser

class CustomerType(DjangoObjectType):
    class Meta:
        model = Customer

class RegisterForm(UserCreationForm):
    email = forms.EmailField(required=True, max_length=100) 

    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password1', 'password2']


class Register(DjangoModelFormMutation):
    user = graphene.Field(UserType)

    class Meta:
        form_class = RegisterForm
        return_field_name = 'user'
    
    def resolve_user(self, info, **kwargs):
        request = info.context
        session_id = request.COOKIES['session-id']

        customer, created = Customer.objects.get_or_create(session_id=session_id)
        
        if self.user:
            self.user.customer = customer
            self.user.save()

        return self.user

   

class Login(graphene.Mutation):
    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)

    message = graphene.String()

    def mutate(self, info, username, password):
        request = info.context
        user = authenticate(username=username, password=password)
        current_user = request.user

        if user is None:
            message = "You provided wrong credentials!"

        elif current_user.is_authenticated:
            message = 'User is already authenticated!'

        else:
            message = 'Success!'
            login(request, user)

        return Login(message)


class Logout(graphene.Mutation):
    message = graphene.String()

    def mutate(self, info, input=None):
        request = info.context
        user = request.user

        if user.is_authenticated:
            message = 'Success!'
            logout(request)
        
        else:
            message = 'User is not authenticated!'

        return Logout(message)


class VerifyAccessToken(graphene.Mutation):
    is_expired = graphene.String()

    def mutate(self, info, input=None):
        is_expired = None
        request = info.context
        user = request.user
        access_token = request.COOKIES.get('accessToken')
        refresh_token = request.COOKIES.get('refreshToken')

        token_expired = refresh_token != None and access_token == None
        user_is_not_authenticated = user.is_authenticated == False

        if token_expired:
            is_expired = True
      
        elif user_is_not_authenticated:
            is_expired = None
        
        else:
            is_expired = False

        return VerifyAccessToken(is_expired)
    
    