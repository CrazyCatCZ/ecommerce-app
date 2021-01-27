import { gql } from "@apollo/client";

const PRODUCT_LIST_QUERY = gql`
  query {
    allProducts {
      title
      category
      price
      image
      label
    }
  }
`;
