import React, { Component } from "react";
import styles from "../Main.module.scss";
import buyIcon from "../../../assets/svg/buyIcon.svg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Product extends Component {
  getCurrencyAmount(prices) {
    return prices.find((price) => {
      return price.currency.label === this.props.label;
    }).amount;
  }

  render() {
    const data = this.props.data;

    return (
      <div className={styles.product}>
        <Link to={`/details/${data.id}`} className={styles.link}>
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
            <div className={styles.cardTitle}>
              {data.name} {data.brand}
            </div>
            <h5 className={styles.cardPrice}>
              {this.props.symbol} {this.getCurrencyAmount(data.prices)}
            </h5>
          </div>
        </Link>
      </div>
    );
  }
}

const currencyStateToProps = (state) => {
  return state.currency;
};

export default connect(currencyStateToProps, null)(Product);
