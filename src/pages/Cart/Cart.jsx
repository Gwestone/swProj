import React, { Component } from "react";
import styles from "./Cart.module.scss";
import Items from "./Items/Items";
import { connect } from "react-redux";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      currency: this.props.currency.symbol,
      quantity: 0,
    };
  }

  getCurrencyAmount(prices) {
    return prices.find((price) => {
      if (price.currency.label === this.props.currency.label) {
        return true;
      }
    }).amount;
  }

  calcPrice() {
    let ans = 0;
    this.props.cart.map((item) => {
      ans += this.getCurrencyAmount(item.prices) * item.quantity;
    });
    return ans.toFixed(2);
  }

  getCount() {
    let ans = 0;
    this.props.cart.map((item) => {
      ans += item.quantity;
    });
    return ans;
  }

  render() {
    return (
      <div className={styles.main}>
        <h2 className={styles.title}>Cart</h2>
        <div className={styles.container}>
          {/*first elem*/}
          <Items />
          {/*second elem*/}
        </div>
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
              {this.props.currency.symbol}{" "}
              {(this.calcPrice() * 0.21).toFixed(2)}
            </div>
            <div className={styles.number}>{this.getCount()}</div>
            <div className={styles.number}>
              {this.props.currency.symbol} {this.calcPrice()}
            </div>
          </div>
        </div>
        <div className={styles.payButtonContainer}>
          <button className={styles.payButton}>Order</button>
        </div>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return { ...state.cart, currency: state.currency };
};

export default connect(stateToProps, null)(Cart);
