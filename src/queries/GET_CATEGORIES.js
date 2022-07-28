import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
    }
  }
`;
export default GET_CATEGORIES;
