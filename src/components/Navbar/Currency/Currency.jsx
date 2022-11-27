import styles from "./Currency.module.scss";
import arrow from "../../../assets/svg/arrow.svg";
import GET_CURRENCIES from "../../../queries/GET_CURRENCIES";
import { setCurrency } from "../../../app/currencySlicer";
import { connect } from "react-redux";
import {useQuery} from "@apollo/client";

function Currency({symbol, label, setCurrency}){
  function handleCurrencySelect(symbol, label) {
    setCurrency({ symbol: symbol, label: label });
  }

    const currentCurrency = label;

    const { loading, error, data } = useQuery(GET_CURRENCIES);

    function unwrapCurrencies(loading, error, data){
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

    return (
      <div className={styles.dropdown}>
        <button className={styles.btn}>
          <div className={styles.currencyIcon}>{symbol}</div>
          <img className={styles.arrow} src={arrow} alt="" />
        </button>

        <div className={styles.dropdownContent}>
            {unwrapCurrencies(loading, error, data)}
        </div>
      </div>
    );
}

const currencyStateToProps = (state) => {
  return state.currency;
};

export default connect(currencyStateToProps, { setCurrency })(Currency);
