import graphene
from .mutations.orders import *


class OrderMutation(graphene.ObjectType):
    create_order = CreateOrder.Field()
    delete_order = DeleteOrder.Field()
    increase_quantity = IncreaseQuantity.Field()
    decrease_quantity = DecreaseQuantity.Field()

    
class OrderQuery(graphene.ObjectType):
    all_orders = graphene.List(OrderType)
    user_orders = graphene.List(OrderType)
    total_orders = graphene.Int()
    order_is_already_in_cart = graphene.Boolean(product_id=graphene.ID())
    total_price_of_orders = graphene.Int()

    def resolve_all_orders(self, info):
        return Order.objects.all()

    def resolve_user_orders(self, info):
        #user = info.context.user
        user = User.objects.get(username='admin')
        return Order.objects.filter(user=user)

    def resolve_total_orders(self, info):
        user = info.context.user
        return Order.objects.all().count()
    
    def resolve_order_is_already_in_cart(self, info, product_id):
        #user = info.context.user
        user = User.objects.get(username='admin')
        product = Product.objects.get(id=product_id)
        return Order.objects.filter(user=user, product=product).count() != 0
         

    def resolve_total_price_of_orders(self, info):
        #user = info.context.user
        user = User.objects.get(username='admin')
        user_orders = Order.objects.filter(user=user)
        total_price = 0

        for order in user_orders:
           total_price += order.calculate_total_price()

        return total_price
 