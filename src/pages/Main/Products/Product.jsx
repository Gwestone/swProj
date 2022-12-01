import React from "react";
import styles from "../MainComponent.module.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../../../app/cartSlicer";
import AddButton from "./AddButton";

function Product({ data, currency, addCart }) {
  //get amount of currency for current selected currency
  function getCurrencyAmount(prices) {
    return prices.find((price) => {
      return price.currency.symbol === currency.symbol;
    }).amount;
  }

  function handleAddCart(e, id, attributes, prices) {
    e.preventDefault();

    let productAttributes = {};
    attributes.forEach((item) => {
      productAttributes[item.id] = item.items[0].id;
    });

    addCart({
      id: id,
      productAttributes: productAttributes,
      quantity: 1,
      prices: prices,
    });
  }

  /**
   * @param {{ id: string,
   *          name: string,
   *          brand: string,
   *          inStock: boolean,
   *          prices: [{
   *              currency: {
   *                  label: string,
   *                  symbol: string
   *              },
   *              amount: number
   *          }],
   *          gallery: [string],
   *          attributes: [{
   *
   *          }]
   *        }} data
   */

  return (
    <div className={styles.product}>
      <div className={!data.inStock ? styles.cardStockOut : ""}>
        {/*render custom link to details*/}
        <Link to={`/details/${data.id}`} className={styles.link}>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              {/*round green cart button*/}
              <AddButton data={data} handleAddCart={handleAddCart} />
              {/*if in stock render as available*/}
              {!data.inStock ? (
                <div className={styles.outStock}>Out of Stock</div>
              ) : (
                ""
              )}
              {/*show first image from gallery*/}
              <img
                className={styles.cardImage}
                src={data.gallery[0]}
                alt={""}
              ></img>
            </div>
            <br />
            {/*show data from server */}
            <div className={styles.cardTitle}>
              {data.name} {data.brand}
            </div>
            <h5 className={styles.cardPrice}>
              {currency.symbol} {getCurrencyAmount(data.prices)}
            </h5>
          </div>
        </Link>
      </div>
    </div>
  );
}

const currencyStateToProps = (state) => {
  return state;
};

export default connect(currencyStateToProps, { addCart })(Product);
