import React from "react";
import styles from "../MainComponent.module.scss";
import { connect } from "react-redux";
import GET_PRODUCTS from "../../../queries/GET_PRODUCTS";
import Product from "./Product";
import { useQuery } from "@apollo/client";

function ProductsComponent({ value }) {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { categoryTitle: value },
  });

  /**
   * @param loading boolean
   * @param data{{
   *  category:{
   *    products: [{
   *      id: string,
   *      name: string,
   *      inStock: boolean,
   *      gallery: [string],
   *      description: string,
   *      prices: [{
   *        currency: {
   *            label: string,
   *            symbol: string
   *        },
   *        amount: number
   *      }]
   *    }],
   *    brand: string
   *  }
   * }} data
   */

  //wait to load data from server
  if (loading && error == null) return <div>...</div>;
  else if (error != null) return <>error</>;
  else {
    //render data from server
    return (
      <div className={styles.products}>
        {data.category.products.map((data, index) => (
          <Product key={index} data={data} />
        ))}
      </div>
    );
  }
}

const currencyStateToProps = (state) => {
  return state.category;
};

export default connect(currencyStateToProps, null)(ProductsComponent);
