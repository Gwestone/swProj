import { Component } from "react";
import styles from "../Navbar.module.scss";
import { Link } from "react-router-dom";

class Category extends Component {
  static defaultProps = {
    name: "not found",
    active: false,
  };

  render() {
    return (
      <li
        className={this.props.active ? styles.activeCategory : styles.category}
        onClick={this.props.onClick}
      >
        <Link to={"/"} className={styles.link}>
          <div
            className={this.props.active ? styles.activeLabel : styles.label}
          >
            <div
              className={this.props.active ? styles.activeText : styles.text}
            >
              {this.props.name}
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

export default Category;
