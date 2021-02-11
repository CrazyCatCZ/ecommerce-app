import graphene
from .mutations.orders import *


class OrderMutation(graphene.ObjectType):
    create_order = CreateOrder.Field()
    delete_order = DeleteOrder.Field()
    increase_quantity = IncreaseQuantity.Field()
    decrease_quantity = DecreaseQuantity.Field()
    clear_orders = ClearOrders.Field()

    
class OrderQuery(graphene.ObjectType):
    all_orders = graphene.List(OrderProductType)
    user_orders = graphene.List(OrderProductType)
    total_orders = graphene.Int()
    order_is_already_in_cart = graphene.Boolean(product_id=graphene.ID())
    total_price_of_orders = graphene.Int()
    something_is_in_cart = graphene.Boolean()
    orders_in_cart = graphene.List(OrderProductType)

    def resolve_all_orders(self, info):
        return OrderProduct.objects.all()

    def resolve_user_orders(self, info):
        request = info.context
        user = request.user
        customer = return_customer(user, request)

        return OrderProduct.objects.filter(customer=customer)

    def resolve_total_orders(self, info):
        request = info.context
        user = request.user
        customer = return_customer(user, request)
        
        return OrderProduct.objects.filter(customer=customer).count()
    
    def resolve_order_is_already_in_cart(self, info, product_id):
        request = info.context
        user = request.user
        customer = return_customer(user, request)
        product = Product.objects.get(id=product_id)

        return OrderProduct.objects.filter(customer=customer, product=product).count() != 0
         

    def resolve_total_price_of_orders(self, info):
        request = info.context
        user = request.user
        customer = return_customer(user, request)
        user_orders = OrderProduct.objects.filter(customer=customer)
        total_price = 0

        for order in user_orders:
           total_price += order.calculate_total_price()

        return total_price
    
    def resolve_something_is_in_cart(self, info):
        request = info.context
        user = request.user
        customer = return_customer(user, request)

        return OrderProduct.objects.filter(customer=customer).count() != 0

 