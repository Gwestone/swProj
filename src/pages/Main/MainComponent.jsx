import React from "react";
import styles from "./MainComponent.module.scss";
import { connect } from "react-redux";
import Products from "./Products/ProductsComponent";

//main page
function MainComponent({ value }) {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>{value}</h2>
      {/*separated logic of loading data from server*/}
      <Products />
    </div>
  );
}

//connect data to redux

const categoryStateToProps = (state) => {
  return state.category;
};

export default connect(categoryStateToProps, null)(MainComponent);
