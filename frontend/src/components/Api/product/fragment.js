import { gql } from "@apollo/client";

export const PRODUCT_FIELDS_FRAGMENT = gql`
  fragment ProductFields on ProductType {
    id
    title
    category
    price
    description
    image
    imageName
    label
    labelColor
  }
`;
