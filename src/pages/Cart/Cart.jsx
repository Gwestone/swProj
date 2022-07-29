import React, { Component } from "react";
import styles from "./Cart.module.scss";
import Items from "./Items/Items";

class Cart extends Component {
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
            <div className={styles.number}>$42.00</div>
            <div className={styles.number}>3</div>
            <div className={styles.number}>$200.00</div>
          </div>
        </div>
        <div className={styles.payButtonContainer}>
          <button className={styles.payButton}>Order</button>
        </div>
      </div>
    );
  }
}

export default Cart;
