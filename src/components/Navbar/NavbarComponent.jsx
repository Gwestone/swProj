import styles from "./NavbarComponent.module.scss";
import logo from "../../assets/svg/logo.svg";
import Currency from "./Currency/CurrencyComponent";
import CartOverlay from "./CartOverlay/CartOverlayComponent";
import Categories from "./Categories/CategoriesComponent";
import { Link } from "react-router-dom";

// let rerender = 0;

function NavbarComponent() {
  // rerender++;
  // console.warn(`🔴component NavbarComponent got rerender: ${rerender} times`)
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

export default NavbarComponent;
