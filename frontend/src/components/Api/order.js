import { gql } from "@apollo/client";

// Queries
export const ORDER_USER_LIST_QUERY = gql`
  query {
    userOrders {
      id
      product {
        title
        category
        price
      }
      quantity
    }
  }
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

// Mutations
export const ORDER_CREATE_MUTATION = gql`
  mutation($productId: ID!) {
    createOrder(productId: $productId) {
      order {
        product {
          title
        }
      }
    }
  }
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
        id
      }
    }
  }
`;

export const ORDER_DECREASE_QUANTITY_MUTATION = gql`
  mutation($orderId: ID!) {
    decreaseQuantity(orderId: $orderId) {
      order {
        id
      }
    }
  }
`;
