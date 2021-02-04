import graphene
from graphene_django import DjangoObjectType
from .models import Product


class ProductType(DjangoObjectType):
    class Meta:
        model = Product


class ProductQuery(graphene.ObjectType):
    all_products = graphene.List(ProductType)
    product = graphene.Field(ProductType, id=graphene.ID())
    products_by_category = graphene.List(ProductType, category=graphene.String())

    def resolve_all_products(root, info, **kwargs):
        return Product.objects.all()

    def resolve_product(root, info, id):
        return Product.objects.get(id=id)

    def resolve_products_by_category(root, info, category):
        if category == 'all':
            return Product.objects.all()
        else: 
            return Product.objects.filter(category=category)

    