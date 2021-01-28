import { gql } from "@apollo/client";

export const ORDER_USER_LIST_QUERY = gql`
  query {
    userOrders {
      product {
        title
      }
    }
  }
`;
