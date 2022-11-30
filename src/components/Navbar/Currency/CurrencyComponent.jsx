import styles from "./CurrencyComponent.module.scss";
import arrow from "../../../assets/svg/arrow.svg";
import { setCurrency } from "../../../app/currencySlicer";
import { connect } from "react-redux";
import LoadCurrencies from "./LoadCurrencies/LoadCurrencies";

function CurrencyComponent({ symbol, label, setCurrency }) {
  function handleCurrencySelect(symbol, label) {
    setCurrency({ symbol: symbol, label: label });
  }

  return (
    <div className={styles.dropdown}>
      <button className={styles.btn}>
        <div className={styles.currencyIcon}>{symbol}</div>
        <img className={styles.arrow} src={arrow} alt="" />
      </button>

      <div className={styles.dropdownContent}>
        <LoadCurrencies
          currentCurrency={label}
          handleCurrencySelect={handleCurrencySelect}
        />
      </div>
    </div>
  );
}

const currencyStateToProps = (state) => {
  return state.currency;
};

export default connect(currencyStateToProps, { setCurrency })(
  CurrencyComponent
);
