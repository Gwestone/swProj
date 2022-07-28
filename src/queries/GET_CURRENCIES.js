import { gql } from "@apollo/client";

const GET_CURRENCIES = gql`
  query GetCurrencies {
    currencies {
      label
      symbol
    }
  }
`;
export default GET_CURRENCIES;
