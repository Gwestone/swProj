import React, { Component } from "react";
import styles from "./Main.module.scss";
import { connect } from "react-redux";
import Products from "./Products/Products";

class Main extends Component {
  render() {
    const selectedCategory = this.props.value;
    return (
      <div className={styles.main}>
        <h2 className={styles.title}>{selectedCategory}</h2>
        <Products />
      </div>
    );
  }
}

const categoryStateToProps = (state) => {
  return state.category;
};

export default connect(categoryStateToProps, null)(Main);
