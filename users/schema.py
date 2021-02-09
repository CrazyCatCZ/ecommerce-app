import graphene
from .mutations.users import *
from .mutations.jwt import *


class UserMutation(AuthMutation, graphene.ObjectType):
    register = Register.Field()
    login = Login.Field()
    logout = Logout.Field()
    verify_access_token = VerifyAccessToken.Field()

    
class UserQuery(graphene.ObjectType):
    me = graphene.Field(UserType)
    all_users = graphene.List(UserType)
    all_customers = graphene.List(CustomerType)

    def resolve_me(self, info):
        user = info.context.user

        if user.is_authenticated:
            return user
        else:
            return None

    def resolve_all_users(self, info):
        return CustomUser.objects.all()
    
    def resolve_all_customers(self, info):
        return Customer.objects.all()