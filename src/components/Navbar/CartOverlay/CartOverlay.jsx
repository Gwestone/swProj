import styles from "./CartOverlay.module.scss";
import React, { Component } from "react";
import cart from "../../../assets/svg/cart.svg";
import img from "../../../assets/png/img2.png";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { dimmerOff, dimmerOn } from "../../../app/dimmerSlicer";
import Items from "./Items/Items";

class CartOverlay extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      redirect: false,
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

  componentDidMount() {
    this.setState({
      ...this.state,
      redirect: false,
    });
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
      <div
        className={styles.dropdown}
        onMouseOver={() => this.props.dimmerOn()}
        onMouseLeave={() => this.props.dimmerOff()}
      >
        <button className={styles.btn}>
          <img className={styles.icon} src={cart} alt="" />
        </button>
        <div className={styles.dropdownContent}>
          <div className={styles.title}>
            <div className={styles.myBag}>My bag, </div>
            <div className={styles.itemsCount}>{this.getCount()} items</div>
          </div>
          <div className={styles.container}>
            <Items />
          </div>
          <div className={styles.priceLabel}>
            <div className={styles.total}>Total </div>
            <div className={styles.sum}>
              {this.props.currency.symbol} {this.calcPrice()}
            </div>
          </div>
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
