import styles from "../NavbarComponent.module.scss";
import { Link } from "react-router-dom";

function Category({ active = false, onClick, name = "not found" }) {
  return (
    <li
      className={active ? styles.activeCategory : styles.category}
      onClick={onClick}
    >
      <Link to={"/"} className={styles.link}>
        <div className={active ? styles.activeLabel : styles.label}>
          <div className={active ? styles.activeText : styles.text}>{name}</div>
        </div>
      </Link>
    </li>
  );
}

export default Category;
