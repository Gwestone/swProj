import { Component } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../assets/svg/logo.svg";
import Currency from "../Currency/Currency";
import CartWidget from "../CartWidget/CartWidget";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.navbar}>
        <ul className={styles.categories}>
          <li className={styles.activeCategory}>
            <div className={styles.activeLabel}>
              <div className={styles.activeText}>WOMEN</div>
            </div>
          </li>
          <li className={styles.category}>
            <div className={styles.label}>
              <div className={styles.text}>MEN</div>
            </div>
          </li>
          <li className={styles.category}>
            <div className={styles.label}>
              <div className={styles.text}>KIDS</div>
            </div>
          </li>
        </ul>
        <img src={logo} className={styles.icon}></img>
        <ul className={styles.rightCategories}>
          <li>
            <Currency />
          </li>
          <li>
            <CartWidget />
          </li>
          <li></li>
        </ul>
      </div>
    );
  }
}
