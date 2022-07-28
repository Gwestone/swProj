import styles from "./Currency.module.scss";
import { Component } from "react";
import arrow from "../../assets/svg/arrow.svg";
import { Query } from "@apollo/client/react/components";
import GET_CATEGORIES from "../../queries/GET_CATEGORIES";
import Category from "../Navbar/category/Category";
import GET_CURRENCIES from "../../queries/GET_CURRENCIES";
import { setCurrency } from "../../app/currencySlicer";
import { connect } from "react-redux";

class Currency extends Component {
  constructor(props) {
    super(props);
  }

  handleCurrencySelect(symbol, label) {
    this.props.setCurrency({ symbol: symbol, label: label });
  }

  render() {
    const currentCurrency = this.props.label;

    return (
      <div className={styles.dropdown}>
        <button className={styles.btn}>
          <div className={styles.currencyIcon}>$</div>
          <img className={styles.arrow} src={arrow} alt="" />
        </button>

        <div className={styles.dropdownContent}>
          <Query query={GET_CURRENCIES}>
            {({ loading, data }) => {
              if (loading) return <div>...</div>;
              else
                return data.currencies.map(({ symbol, label }, index) => (
                  <a
                    className={currentCurrency === label ? styles.active : ""}
                    href="#"
                    onClick={() => {
                      this.handleCurrencySelect(symbol, label);
                    }}
                    key={index}
                  >
                    {symbol} {label}
                  </a>
                ));
            }}
          </Query>
        </div>
      </div>
    );
  }
}

const currencyStateToProps = (state) => {
  return state.currency;
};

export default connect(currencyStateToProps, { setCurrency })(Currency);
