import { gql } from "@apollo/client";

export const ORDER_FIELDS_FRAGMENT = gql`
  fragment OrderFields on OrderProductType {
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
