import React, { Component } from "react";
import styles from "../Main.module.scss";
import buyIcon from "../../../assets/svg/buyIcon.svg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../../../app/cartSlicer";

class Product extends Component {
  getCurrencyAmount(prices) {
    return prices.find((price) => {
      return price.currency.label === this.props.label;
    }).amount;
  }

  handleAddCart(e, id, attributes, prices) {
    e.preventDefault();
    let productAttributes = {};
    attributes.forEach((item) => {
      productAttributes[item.id] = item.items[0].id;
    });
    // console.log(id);
    // console.log(productAttributes);
    // console.log(prices);
    this.props.addCart({
      id: id,
      productAttributes: productAttributes,
      quantity: 1,
      prices: prices,
    });
  }

  renderAddButton(data) {
    if (data.inStock)
      return (
        <button
          className={styles.addToCart}
          onClick={(e) =>
            this.handleAddCart(e, data.id, data.attributes, data.prices)
          }
        >
          <img className={styles.buyIcon} src={buyIcon} alt="" />
        </button>
      );
  }

  render() {
    const data = this.props.data;
    // console.log(data);
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
                {this.renderAddButton(data)}
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
                {this.props.symbol} {this.getCurrencyAmount(data.prices)}
              </h5>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

const currencyStateToProps = (state) => {
  return state.currency;
};

export default connect(currencyStateToProps, { addCart })(Product);
