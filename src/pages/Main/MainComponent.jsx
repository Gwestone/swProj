import React from "react";
import styles from "./MainComponent.module.scss";
import { connect } from "react-redux";
import Products from "./Products/ProductsComponent";

function MainComponent({ value }) {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>{value}</h2>
      <Products />
    </div>
  );
}

const categoryStateToProps = (state) => {
  return state.category;
};

export default connect(categoryStateToProps, null)(MainComponent);
