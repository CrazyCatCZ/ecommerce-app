import graphene
from graphene_django import DjangoObjectType
from .models import Product


class ProductType(DjangoObjectType):
    class Meta:
        model = Product


class ProductQuery(graphene.ObjectType):
    all_products = graphene.List(ProductType)
    product = graphene.Field(ProductType, id=graphene.ID())

    def resolve_all_products(root, info, **kwargs):
        return Product.objects.all()

    def resolve_product(root, info, id):
        return Product.objects.get(id=id)