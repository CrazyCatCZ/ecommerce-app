import os

import graphene
import stripe
from graphene_django.types import DjangoObjectType
from graphql_jwt.decorators import login_required


STRIPE_SECRET_KEY = os.environ.get('STRIPE_SECRET_KEY')
PRODUCT_PRICE = os.environ.get('STRIPE_COFFEE_PRODUCT')

BASE_URL = os.environ.get('WEBSITE_BASE_URL')
CENTS_TO_DOLLARS = 100
IMAGE_URL = 'https://www.zboziaprodej.cz/wp-content/uploads/2018/09/ecommerce-1992280_960_720-620x464.png'

class CreateCheckoutSession(graphene.Mutation):
    session = graphene.JSONString()

    def mutate(root, info, input=None):
        stripe.api_key = STRIPE_SECRET_KEY

        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'price_data': {
                    'currency': 'usd',
                    'unit_amount_decimal': 20 * CENTS_TO_DOLLARS,
                    'product_data': {
                        'name': 'E-Commerce Payment',
                        'images': [IMAGE_URL]
                    },
                },
                'quantity': 1,
            }],
            mode='payment',
            success_url=f'{BASE_URL}?success=true',
            cancel_url=f'{BASE_URL}',
        )

        return CreateCheckoutSession(session=session)