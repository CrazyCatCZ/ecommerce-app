import { gql } from "@apollo/client";
import { ORDER_FIELDS_FRAGMENT } from "./fragment";

// Queries
export const ORDER_USER_LIST_QUERY = gql`
  query {
    userOrders {
      ...OrderFields
    }
  }
  ${ORDER_FIELDS_FRAGMENT}
`;

export const ORDER_TOTAl_ORDERS_QUERY = gql`
  query {
    totalOrders
  }
`;

export const ORDER_TOTAL_PRICE_QUERY = gql`
  query {
    totalPriceOfOrders
  }
`;

export const ORDER_IS_ALREADY_IN_CART_QUERY = gql`
  query($productId: ID!) {
    orderIsAlreadyInCart(productId: $productId)
  }
`;

// Mutations
export const ORDER_CREATE_MUTATION = gql`
  mutation($productId: ID!) {
    createOrder(productId: $productId) {
      order {
        ...OrderFields
      }
    }
  }
  ${ORDER_FIELDS_FRAGMENT}
`;

export const ORDER_DELETE_MUTATION = gql`
  mutation($orderId: ID!) {
    deleteOrder(orderId: $orderId) {
      message
    }
  }
`;

export const ORDER_INCREASE_QUANTITY_MUTATION = gql`
  mutation($orderId: ID!) {
    increaseQuantity(orderId: $orderId) {
      order {
        ...OrderFields
      }
    }
  }
  ${ORDER_FIELDS_FRAGMENT}
`;

export const ORDER_DECREASE_QUANTITY_MUTATION = gql`
  mutation($orderId: ID!) {
    decreaseQuantity(orderId: $orderId) {
      order {
        ...OrderFields
      }
    }
  }
  ${ORDER_FIELDS_FRAGMENT}
`;

export const ORDER_CLEAR_ORDERS_MUTATION = gql`
  mutation {
    clearOrders {
      message
    }
  }
`;
