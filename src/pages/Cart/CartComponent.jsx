import React from "react";
import styles from "./CartComponent.module.scss";
import Items from "./Items/Items";
import { connect } from "react-redux";

function CartComponent({ currency, cart }) {
  function getCurrencyAmount(prices) {
    return prices.find((price) => {
      return price.currency.label === currency.label;
    }).amount;
  }

  function calcPrice() {
    let ans = 0;
    cart.forEach((item) => {
      ans += getCurrencyAmount(item.prices) * item.quantity;
    });
    return ans.toFixed(2);
  }

  function getCount() {
    let ans = 0;
    cart.forEach((item) => {
      ans += item.quantity;
    });
    return ans;
  }

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Cart</h2>
      {/*render cart items*/}
      <div className={styles.container}>
        <Items />
      </div>
      {/*render all products price and count*/}
      <div className={styles.stats}>
        <div className={styles.labels}>
          <div className={styles.label}>Tax 21%: </div>
          <div className={styles.label}>Quantity: </div>
          <div style={{ fontWeight: "500" }} className={styles.label}>
            Total:{" "}
          </div>
        </div>
        <div className={styles.numbers}>
          <div className={styles.number}>
            {currency.symbol} {(calcPrice() * 0.21).toFixed(2)}
          </div>
          <div className={styles.number}>{getCount()}</div>
          <div className={styles.number}>
            {currency.symbol} {calcPrice()}
          </div>
        </div>
      </div>
      {/*pay button*/}
      <div className={styles.payButtonContainer}>
        <button className={styles.payButton}>Order</button>
      </div>
    </div>
  );
}

const stateToProps = (state) => {
  return { ...state.cart, currency: state.currency };
};

export default connect(stateToProps, null)(CartComponent);
