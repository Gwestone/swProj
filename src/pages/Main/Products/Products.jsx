import React from "react";
import styles from "../Main.module.scss";
import {connect} from "react-redux";
import GET_PRODUCTS from "../../../queries/GET_PRODUCTS";
import Product from "./Product";
import {useQuery} from "@apollo/client";

function Products({value}){

  const { loading, error, data } = useQuery(GET_PRODUCTS, {variables: {categoryTitle: value}});

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

  function unwrapCategories(loading, data, error){
    if (loading && error == null) return <div>...</div>;
    else if(error != null)
      return (<>error</>)
    else
      return data.category.products.map((data, index) => (
          <Product key={index} data={data} />
      ));
  }

    return (
      <>
        <div className={styles.products}>
          {unwrapCategories(loading, data, error)}
        </div>
      </>
    );
}

const currencyStateToProps = (state) => {
  return state.category;
};

export default connect(currencyStateToProps, null)(Products);
