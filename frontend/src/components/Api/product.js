import { gql } from "@apollo/client";

export const PRODUCT_LIST_QUERY = gql`
  query {
    allProducts {
      id
      title
      category
      price
      image
      imageName
      label
    }
  }
`;
