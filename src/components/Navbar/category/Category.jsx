import { Component } from "react";
import styles from "./Category.module.scss";
import logo from "../../../assets/svg/logo.svg";
import Currency from "../../Currency/Currency";
import CartWidget from "../../CartWidget/CartWidget";

class Category extends Component {
  constructor(props) {
    super(props);
  }

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
