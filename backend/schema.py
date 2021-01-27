import graphene
from users.schema import UserQuery, UserMutation 


class Query(graphene.ObjectType):
    hello = graphene.String(default_value="Hi!")


class Mutation(UserQuery, UserMutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
