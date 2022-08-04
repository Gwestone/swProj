import styles from "./CartOverlay.module.scss";
import React, { Component } from "react";
import cart from "../../../assets/svg/cart.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { dimmerOff, dimmerOn } from "../../../app/dimmerSlicer";
import Items from "./Items/Items";

class CartOverlay extends Component {
  //get amount of current selected currency
  //needs currency: state.currencies in props for work
  getCurrencyAmount(prices) {
    return prices.find((price) => {
      return price.currency.label === this.props.currency.label;
    }).amount;
  }

  //count whole price of all products in cart
  calcPrice() {
    let ans = 0;
    this.props.cart.forEach((item) => {
      ans += this.getCurrencyAmount(item.prices) * item.quantity;
    });
    return ans.toFixed(2);
  }

  // count all products in bag
  getCount() {
    let ans = 0;
    this.props.cart.forEach((item) => {
      ans += item.quantity;
    });
    return ans;
  }

  render() {
    return (
      <div
        className={styles.dropdown}
        // onMouseOver={() => this.props.dimmerOn()}
        // onMouseLeave={() => this.props.dimmerOff()}
      >
        <button className={styles.btn}>
          <img className={styles.icon} src={cart} alt="" />
          {this.getCount() > 0 ? (
            <div className={styles.badge}>{this.getCount()}</div>
          ) : (
            ""
          )}
        </button>
        <div className={styles.dropdownContent}>
          {/*cart title with bag items count*/}
          <div className={styles.title}>
            <div className={styles.myBag}>My bag, </div>
            <div className={styles.itemsCount}>{this.getCount()} items</div>
          </div>
          {/*bag items*/}
          <div className={styles.container}>
            <Items />
          </div>
          {/*total price render and calc*/}
          <div className={styles.itemSpacer}></div>
          <div className={styles.priceLabel}>
            <div className={styles.total}>Total </div>
            <div className={styles.sum}>
              {this.props.currency.symbol} {this.calcPrice()}
            </div>
          </div>
          {/*pay and view bag buttons*/}
          <div className={styles.buttons}>
            <Link className={styles.viewButton} to={"/cart"}>
              View bag
            </Link>
            <Link className={styles.checkOutButton} to={"/cart"}>
              <div>Check out</div>
            </Link>
          </div>
          <div className={styles.spacer}></div>
        </div>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return { ...state.cart, currency: state.currency };
};

export default connect(stateToProps, { dimmerOn, dimmerOff })(CartOverlay);
