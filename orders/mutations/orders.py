import graphene
from graphene_django import DjangoObjectType
from users.models import User, Customer
from orders.models import Order
from products.models import Product

def returnCustomer(user, request):
    if user.is_anonymous:
        session_id = request.COOKIES['session-id']
        customer, created = Customer.objects.get_or_create(session_id=session_id)
    else:
        customer = user.customer
    
    return customer


class OrderType(DjangoObjectType):
    class Meta:
        model = Order

    
class CreateOrder(graphene.Mutation):
    class Arguments:
        product_id = graphene.ID()

    order = graphene.Field(OrderType)

    def mutate(cls, info, product_id):
        request = info.context
        user = request.user
        product = Product.objects.get(id=product_id)
        customer = returnCustomer(user, request)

        order = Order.objects.create(customer=customer, product=product)
        order.save()

        return CreateOrder(order)


class DeleteOrder(graphene.Mutation):
    class Arguments:
        order_id = graphene.ID()

    message = graphene.String()

    def mutate(cls, info, order_id):
        #user = info.context.user
        user = User.objects.get(username="admin")
        order = Order.objects.get(id=order_id)
        order.delete()

        message = 'Success!'
        return DeleteOrder(message)

    
class IncreaseQuantity(graphene.Mutation):
    class Arguments:
        order_id = graphene.ID()

    order = graphene.Field(OrderType)

    def mutate(cls, info, order_id):
        #user = info.context.user
        user = User.objects.get(username="admin")
        order = Order.objects.get(id=order_id)

        order.quantity += 1
        order.save()

        return IncreaseQuantity(order)


class DecreaseQuantity(graphene.Mutation):
    class Arguments:
        order_id = graphene.ID()

    order = graphene.Field(OrderType)

    def mutate(cls, info, order_id):
        #user = info.context.user
        user = User.objects.get(username="admin")
        order = Order.objects.get(id=order_id)

        order.quantity -= 1
        order.save()
        
        return DecreaseQuantity(order)


class ClearOrders(graphene.Mutation):
    message = graphene.String()

    def mutate(cls, info):
        request = info.context
        user = request.user
        customer = returnCustomer(user, request)

        user_orders = Order.objects.filter(customer=customer)

        for order in user_orders:
            order.delete()

        message = 'Success!'
        return ClearOrders(message)