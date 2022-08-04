import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query getCategories($categoryTitle: String!) {
    category(input: { title: $categoryTitle }) {
      products {
        id
        name
        inStock
        gallery
        description
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;
export default GET_PRODUCTS;
