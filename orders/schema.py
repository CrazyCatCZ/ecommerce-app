import graphene
from .mutations.orders import *


class OrderMutation(graphene.ObjectType):
    pass

    
class OrderQuery(graphene.ObjectType):
    all_orders = graphene.List(OrderType)
    user_orders = graphene.List(OrderType)

    def resolve_all_orders(self, info):
        return Order.objects.all()

    def resolve_user_orders(self, info):
        user = info.context.user
        return Order.objects.filter(user=user)