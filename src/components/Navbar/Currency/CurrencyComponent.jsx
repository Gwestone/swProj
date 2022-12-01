import styles from "./CurrencyComponent.module.scss";
import arrow from "../../../assets/svg/arrow.svg";
import { setCurrency } from "../../../app/currencySlicer";
import { connect } from "react-redux";
import LoadCurrencies from "./LoadCurrencies/LoadCurrencies";

function CurrencyComponent({ symbol, label, setCurrency }) {
  //translate currency to global redux state

  function handleCurrencySelect(symbol, label) {
    setCurrency({ symbol: symbol, label: label });
  }

  return (
    <div className={styles.dropdown}>
      {/*navbar button*/}
      <button className={styles.btn}>
        <div className={styles.currencyIcon}>{symbol}</div>
        <img className={styles.arrow} src={arrow} alt="" />
      </button>

      {/*dropdown*/}
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
