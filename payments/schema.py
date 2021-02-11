import graphene
from .mutations.payments import *

class PaymentMutation(graphene.ObjectType):
    create_checkout_session = CreateCheckoutSession.Field()
    handle_payment = HandlePayment.Field()