import React from "react";
import styles from "../Main.module.scss";
import buyIcon from "../../../assets/svg/buyIcon.svg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../../../app/cartSlicer";

function Product({data, currency, addCart}){

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

  function renderAddButton(data) {
    if (data.inStock)
      return (
        <button
          className={styles.addToCart}
          onClick={(e) =>
            handleAddCart(e, data.id, data.attributes, data.prices)
          }
        >
          <img className={styles.buyIcon} src={buyIcon} alt="" />
        </button>
      );
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
          <Link to={`/details/${data.id}`} className={styles.link}>
            <div className={styles.card}>
              <div className={styles.imgContainer}>
                {/*round green cart button*/}
                {renderAddButton(data)}
                {!data.inStock ? (
                  <div className={styles.outStock}>Out of Stock</div>
                ) : (
                  ""
                )}
                <img
                  className={styles.cardImage}
                  src={data.gallery[0]}
                  alt={""}
                ></img>
              </div>
              <br />
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
