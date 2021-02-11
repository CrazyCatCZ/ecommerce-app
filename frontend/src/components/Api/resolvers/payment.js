import { gql } from "@apollo/client";

export const CREATE_CHECKOUT_SESSION_MUTATION = gql`
  mutation($totalPrice: Int!) {
    createCheckoutSession(totalPrice: $totalPrice) {
      session
    }
  }
`;

export const HANDLE_PAYMENT_MUTATION = gql`
  mutation {
    handlePayment {
      message
    }
  }
`;
