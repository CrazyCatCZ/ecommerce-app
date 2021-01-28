import { gql } from "@apollo/client";

export const ORDER_USER_LIST_QUERY = gql`
  query {
    userOrders {
      id
      product {
        title
        price
      }
      quantity
    }
  }
`;

export const ORDER_TOTAL_PRICE_QUERY = gql`
  query {
    totalPriceOfOrders
  }
`;
