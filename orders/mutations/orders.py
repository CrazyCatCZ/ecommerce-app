import graphene
from graphene_django import DjangoObjectType
from users.models import User
from orders.models import Order
from products.models import Product


class OrderType(DjangoObjectType):
    class Meta:
        model = Order

    
class CreateOrder(graphene.Mutation):
    class Arguments:
        product_id = graphene.ID()

    order = graphene.Field(OrderType)

    def mutate(cls, info, product_id):
        #user = info.context.user
        user = User.objects.get(username="admin")
        product = Product.objects.get(id=product_id)

        order = Order.objects.create(user=user, product=product)
        order.save()

        return CreateOrder(order)


class DeleteOrder(graphene.Mutation):
    class Arguments:
        order_id = graphene.ID()

    order = graphene.Field(OrderType)

    def mutate(cls, info, order_id):
        user = info.context.user
        order = Order.objects.get(id=order_id)
        order.delete()

        message = 'Success!'
        return DeleteOrder(message)

    
class IncreaseQuantity(graphene.Mutation):
    class Arguments:
        order_id = graphene.ID()

    order = graphene.Field(OrderType)

    def mutate(cls, info, order_id):
        user = info.context.user
        order = Order.objects.get(id=order_id)

        order.quantity += 1
        order.save()

        return IncreaseQuantity(order)


class DecreaseQuantity(graphene.Mutation):
    class Arguments:
        order_id = graphene.ID()

    order = graphene.Field(OrderType)

    def mutate(cls, info, order_id):
        user = info.context.user
        order = Order.objects.get(id=order_id)

        order.quantity -= 1
        order.save()
        
        return DecreaseQuantity(order)
