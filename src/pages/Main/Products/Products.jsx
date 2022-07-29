import React, { Component } from "react";
import styles from "../Main.module.scss";
import { connect } from "react-redux";
import { Query } from "@apollo/client/react/components";
import GET_PRODUCTS from "../../../queries/GET_PRODUCTS";
import Product from "./Product";

class Products extends Component {
  render() {
    const selectedCategory = this.props.value;
    return (
      <>
        {" "}
        <div className={styles.products}>
          <Query
            query={GET_PRODUCTS}
            variables={{ categoryTitle: selectedCategory }}
          >
            {({ loading, data }) => {
              if (loading) return <div>...</div>;
              else
                return data.category.products.map((data, index) => (
                  <Product key={index} data={data} />
                ));
            }}
          </Query>
        </div>
      </>
    );
  }
}

const currencyStateToProps = (state) => {
  return state.category;
};

export default connect(currencyStateToProps, null)(Products);
