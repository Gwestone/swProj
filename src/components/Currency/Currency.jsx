import styles from "./Currency.module.scss";
import { Component } from "react";
import arrow from "../../assets/svg/arrow.svg";

export default class Currency extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.dropdown}>
        <button className={styles.btn}>
          <div className={styles.currencyIcon}>$</div>
          <img className={styles.arrow} src={arrow} alt="" />
        </button>

        <div className={styles.dropdownContent}>
          <a href="#">$ USD</a>
          <a href="#">€ EUR</a>
          <a href="#">¥ JPY</a>
        </div>
      </div>
    );
  }
}
