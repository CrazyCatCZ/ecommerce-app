import graphene
from users.schema import UserQuery, UserMutation 
from products.schema import ProductQuery 


class Query(UserQuery, ProductQuery, graphene.ObjectType):
    pass


class Mutation(UserMutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
