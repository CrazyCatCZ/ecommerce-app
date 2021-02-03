import { gql } from "@apollo/client";
import { PRODUCT_FIELDS_FRAGMENT } from "./fragment";

export const PRODUCT_LIST_QUERY = gql`
  query {
    allProducts {
      ...ProductFields
    }
  }
  ${PRODUCT_FIELDS_FRAGMENT}
`;

export const PRODUCT_DETAIL_QUERY = gql`
  query($id: ID!) {
    product(id: $id) {
      ...ProductFields
    }
  }
  ${PRODUCT_FIELDS_FRAGMENT}
`;

export const PRODUCT_CATEGORY_QUERY = gql`
  query($category: String!) {
    productsByCategory(category: $category) {
      ...ProductFields
    }
  }
  ${PRODUCT_FIELDS_FRAGMENT}
`;
