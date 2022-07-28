import React, { Component } from "react";
import styles from "./Main.module.scss";
import Product from "./Product/product";
import { Query } from "@apollo/client/react/components";
import GET_PRODUCTS from "../../queries/GET_PRODUCTS";
import { connect } from "react-redux";

class Main extends Component {
  render() {
    const selectedCategory = this.props.value;
    return (
      <div className={styles.main}>
        <h2 className={styles.title}>{selectedCategory}</h2>
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
      </div>
    );
  }
}

const categoryStateToProps = (state) => {
  return state.category;
};

export default connect(categoryStateToProps, null)(Main);
