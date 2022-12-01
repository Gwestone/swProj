import styles from "./CartOverlayComponent.module.scss";
import React from "react";
import cartIcon from "../../../assets/svg/cart.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { dimmerOff, dimmerOn } from "../../../app/dimmerSlicer";
import Items from "./Items/Items";

function CartOverlayComponent({ currency, cart }) {
  //get amount of current selected currency
  //needs currency: state.currencies in props for work
  function getCurrencyAmount(prices) {
    return prices.find((price) => {
      return price.currency.label === currency.label;
    }).amount;
  }

  //count whole price of all products in cart
  function calcPrice() {
    let ans = 0;
    cart.forEach((item) => {
      ans += getCurrencyAmount(item.prices) * item.quantity;
    });
    return ans.toFixed(2);
  }

  // count all products in bag
  function getCount() {
    let ans = 0;
    cart.forEach((item) => {
      ans += item.quantity;
    });
    return ans;
  }

  return (
    <div className={styles.dropdown}>
      <button className={styles.btn}>
        <img className={styles.icon} src={cartIcon} alt="" />
        {getCount() > 0 ? <div className={styles.badge}>{getCount()}</div> : ""}
      </button>
      <div className={styles.dropdownContent}>
        {/*cart title with bag items count*/}
        <div className={styles.title}>
          <div className={styles.myBag}>My bag, </div>
          <div className={styles.itemsCount}>{getCount()} items</div>
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
            {currency.symbol} {calcPrice()}
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

const stateToProps = (state) => {
  return { ...state.cart, currency: state.currency };
};

export default connect(stateToProps, { dimmerOn, dimmerOff })(
  CartOverlayComponent
);
