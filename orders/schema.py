import graphene
from .mutations.orders import *
from users.models import User


class OrderMutation(graphene.ObjectType):
    pass

    
class OrderQuery(graphene.ObjectType):
    all_orders = graphene.List(OrderType)
    user_orders = graphene.List(OrderType)
    total_price_of_orders = graphene.Int()

    def resolve_all_orders(self, info):
        return Order.objects.all()

    def resolve_user_orders(self, info):
        #user = info.context.user
        user = User.objects.get(username='admin')
        return Order.objects.filter(user=user)

    def resolve_total_price_of_orders(self, info):
        user = info.context.user
        user_orders = Order.objects.filter(user=user)
        total_price = 0

        for order in user_orders:
           total_price += order.calculate_total_price()

        return total_price
 