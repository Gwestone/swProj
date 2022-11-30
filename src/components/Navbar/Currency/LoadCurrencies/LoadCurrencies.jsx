import styles from "../CurrencyComponent.module.scss";
import { useQuery } from "@apollo/client";
import GET_CURRENCIES from "../../../../queries/GET_CURRENCIES";

function LoadCurrencies({ currentCurrency, handleCurrencySelect }) {
  const { loading, data } = useQuery(GET_CURRENCIES);
  if (loading) return <div>...</div>;
  else
    return data.currencies.map(({ symbol, label }, index) => (
      <div
        className={currentCurrency === label ? styles.active : ""}
        onClick={() => {
          handleCurrencySelect(symbol, label);
        }}
        key={index}
      >
        {symbol} {label}
      </div>
    ));
}

export default LoadCurrencies;
