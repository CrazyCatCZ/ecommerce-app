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

export const PRODUCT_DETAIL_QUERY = gql`
  query($id: ID!) {
    product(id: $id) {
      price
      description
      imageName
      label
      labelColor
    }
  }
`;
