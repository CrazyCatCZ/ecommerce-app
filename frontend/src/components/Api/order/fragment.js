import { gql } from "@apollo/client";

export const ORDER_FIELDS_FRAGMENT = gql`
  fragment OrderFields on OrderType {
    id
    product {
      id
      title
      category
      price
    }
    quantity
  }
`;
