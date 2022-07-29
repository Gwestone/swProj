import React, { Component } from "react";
import styles from "../Main.module.scss";
import buyIcon from "../../../assets/svg/buyIcon.svg";
import { connect } from "react-redux";

class Product extends Component {
  render() {
    const data = this.props.data;

    let price = data.prices.find((price) => {
      if (price.currency.label === this.props.label) {
        return true;
      }
    });

    return (
      <div className={styles.product}>
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <img className={styles.buyIcon} src={buyIcon} alt="" />
            <img
              className={styles.cardImage}
              src={data.gallery[0]}
              alt={""}
            ></img>
          </div>
          <br />
          <div className={styles.cardTitle}>{data.name}</div>
          <h5 className={styles.cardPrice}>
            {price.currency.symbol} {price.amount}
          </h5>
        </div>
      </div>
    );
  }
}

const currencyStateToProps = (state) => {
  return state.currency;
};

export default connect(currencyStateToProps, null)(Product);
