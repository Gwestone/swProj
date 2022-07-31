import { gql } from "@apollo/client";

const GET_ATTRIBUTES = gql`
  query GetAttributes($id: String!) {
    product(id: $id) {
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
    }
  }
`;
export default GET_ATTRIBUTES;
