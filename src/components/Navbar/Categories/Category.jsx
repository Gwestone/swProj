import { Component } from "react";
import styles from "../Navbar.module.scss";

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
        <div className={this.props.active ? styles.activeLabel : styles.label}>
          <div className={this.props.active ? styles.activeText : styles.text}>
            {this.props.name}
          </div>
        </div>
      </li>
    );
  }
}

export default Category;
