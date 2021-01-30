import graphene
from users.schema import UserQuery, UserMutation 
from products.schema import ProductQuery 
from orders.schema import OrderQuery, OrderMutation
from payments.schema import PaymentMutation 



class Query(UserQuery, ProductQuery, OrderQuery, graphene.ObjectType):
    pass


class Mutation(UserMutation, OrderMutation, PaymentMutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
