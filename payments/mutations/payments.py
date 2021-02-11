import os
import json
import stripe
import graphene

from django.http import HttpResponse
from graphene_django.types import DjangoObjectType
from graphql_jwt.decorators import login_required

from orders.mutations.orders import return_customer
from orders.models import OrderProduct, Order

# Global variable
intent = ''

STRIPE_SECRET_KEY = os.environ.get('STRIPE_SECRET_KEY')
PRODUCT_PRICE = os.environ.get('STRIPE_COFFEE_PRODUCT')

#BASE_URL = os.environ.get('WEBSITE_BASE_URL')
CENTS_TO_DOLLARS = 100
BASE_URL = 'http://127.0.0.1:8000'
IMAGE_URL = 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'

class CreateCheckoutSession(graphene.Mutation):
    class Arguments:
        total_price = graphene.Int()

    session = graphene.JSONString()

    def mutate(root, info, total_price):
        stripe.api_key = STRIPE_SECRET_KEY

        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'price_data': {
                    'currency': 'usd',
                    'unit_amount_decimal': total_price * CENTS_TO_DOLLARS,
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

        global create_intent
        create_intent = stripe.PaymentIntent.create(
            amount=100,
            currency='usd',
            payment_method_types=['card'],
        )

        return CreateCheckoutSession(session=session)


class HandlePayment(graphene.Mutation):
    message = graphene.String()

    def mutate(root, info):
        request = info.context
        user = request.user
        customer = return_customer(user, request)

        confirm_intent = stripe.PaymentIntent.confirm(
            create_intent['id'],
            payment_method="pm_card_visa",
        )

        if confirm_intent['status'] == 'succeeded':
            order = Order(user=user)
            user_product_orders = OrderProduct.objects.filter(customer=customer)

            order.save()
            
            for product_order in user_product_orders:
                product = product_order.product
                order.products.add(product)
                
        return HandlePayment(message="ok")
