import styles from "./NavbarComponent.module.scss";
import logo from "../../assets/svg/logo.svg";
import Currency from "./Currency/CurrencyComponent";
import CartOverlay from "./CartOverlay/CartOverlayComponent";
import Categories from "./Categories/CategoriesComponent";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <div className={styles.navbar}>
      {/*categories selection on the navbar */}
      <Categories />
      {/*central icon on navbar*/}
      <Link to={"/"}>
        <img src={logo} className={styles.icon} alt={""}></img>
      </Link>
      {/*right panel of navbar*/}
      <ul className={styles.rightCategories}>
        <li>
          {/*currency selection component*/}
          <Currency />
        </li>
        <li>
          {/*mini cart widget in navbar component*/}
          <CartOverlay />
        </li>
        <li></li>
      </ul>
    </div>
  );
}

export default NavbarComponent;
