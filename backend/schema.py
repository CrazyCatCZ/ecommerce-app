import graphene
from users.schema import UserQuery, UserMutation 
from products.schema import ProductQuery 
from orders.schema import OrderQuery 


class Query(UserQuery, ProductQuery, OrderQuery, graphene.ObjectType):
    pass


class Mutation(UserMutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
