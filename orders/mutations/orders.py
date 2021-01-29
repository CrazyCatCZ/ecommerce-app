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
        quantity = graphene.Int()

    order = graphene.Field(OrderType)

    def mutate(cls, info, product_id, quantity):
        user = info.context.user
        product = Product.objects.get(id=product_id)
        order = Order.objects.create(
            user=user, product=product, quantity=quantity
        )
        order.save()

        return CreateOrder(order)