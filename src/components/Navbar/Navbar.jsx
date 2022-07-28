import { Component } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../assets/svg/logo.svg";
import Currency from "../Currency/Currency";
import CartWidget from "../CartWidget/CartWidget";
import Categories from "./categories/Categories";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.navbar}>
        <Categories />
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

export default Navbar;
