import { Component } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../assets/svg/logo.svg";
import Currency from "./Currency/Currency";
import CartOverlay from "./CartOverlay/CartOverlay";
import Categories from "./Categories/Categories";
import { Link } from "react-router-dom";

let rerender = 0;

class Navbar extends Component {
    render() {
        rerender++;
        console.warn(`🔴component Navbar got rerender: ${rerender} times`)
        return (
            <div className={styles.navbar}>
                <Categories />
                <Link to={"/"}>
                    <img src={logo} className={styles.icon} alt={""}></img>
                </Link>
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
