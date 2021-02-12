import graphene
from graphene_django import DjangoObjectType
from users.models import Customer
from orders.models import OrderProduct
from products.models import Product

def return_customer(user, request):
    if user.is_anonymous:
        session_id = request.COOKIES['session-id']
        customer, created = Customer.objects.get_or_create(session_id=session_id)
    else:
        customer = user.customer

    # for now
    #customer = Customer.objects.get(session_id=1)

    return customer


class OrderProductType(DjangoObjectType):
    class Meta:
        model = OrderProduct

    
class CreateOrder(graphene.Mutation):
    class Arguments:
        product_id = graphene.ID()

    order = graphene.Field(OrderProductType)

    def mutate(cls, info, product_id):
        request = info.context
        user = request.user
        product = Product.objects.get(id=product_id)
        customer = return_customer(user, request)

        order = OrderProduct.objects.create(customer=customer, product=product)
        order.save()

        return CreateOrder(order)


class DeleteOrder(graphene.Mutation):
    class Arguments:
        order_id = graphene.ID()

    message = graphene.String()

    def mutate(cls, info, order_id):
        #user = info.context.user
        order = OrderProduct.objects.get(id=order_id)
        order.delete()

        message = 'Success!'
        return DeleteOrder(message)

    
class IncreaseQuantity(graphene.Mutation):
    class Arguments:
        order_id = graphene.ID()

    order = graphene.Field(OrderProductType)

    def mutate(cls, info, order_id):
        #user = info.context.user
        order = OrderProduct.objects.get(id=order_id)

        order.quantity += 1
        order.save()

        return IncreaseQuantity(order)


class DecreaseQuantity(graphene.Mutation):
    class Arguments:
        order_id = graphene.ID()

    order = graphene.Field(OrderProductType)

    def mutate(cls, info, order_id):
        #user = info.context.user
        order = OrderProduct.objects.get(id=order_id)

        order.quantity -= 1
        order.save()
        
        return DecreaseQuantity(order)


class ClearOrders(graphene.Mutation):
    message = graphene.String()

    def mutate(cls, info):
        request = info.context
        user = request.user
        customer = return_customer(user, request)

        user_orders = OrderProduct.objects.filter(customer=customer)

        for order in user_orders:
            order.delete()

        message = 'Success!'
        return ClearOrders(message)