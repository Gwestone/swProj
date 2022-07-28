import { Component } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../assets/svg/logo.svg";
import Currency from "./Currency/Currency";
import CartOverlay from "./CartOverlay/CartOverlay";
import Categories from "./Categories/Categories";

class Navbar extends Component {
  render() {
    return (
      <div className={styles.navbar}>
        <Categories />
        <img src={logo} className={styles.icon} alt={""}></img>
        <ul className={styles.rightCategories}>
          <li>
            <Currency />
          </li>
          <li>
            <CartOverlay />
          </li>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
