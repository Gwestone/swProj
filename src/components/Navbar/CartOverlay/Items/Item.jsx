import React, { useState } from "react";
import styles from "../CartOverlayComponent.module.scss";
import GET_PRODUCT from "../../../../queries/GET_PRODUCT";
import { connect } from "react-redux";
import {
  decrementQuantityCart,
  incrementQuantityCart,
  updateCart,
} from "../../../../app/cartSlicer";
import { useQuery } from "@apollo/client";
import Attributes from "./Attributes/Attributes";

function Item({
  itemKey,
  label,
  elem,
  updateCart,
  symbol,
  incrementQuantityCart,
  decrementQuantityCart,
}) {
  const [itemStateKey] = useState(itemKey);
  const [elemState] = useState(elem);

  function getCurrencyAmount(prices) {
    return prices.find((price) => {
      return price.currency.label === label;
    }).amount;
  }

  function handleSelect(id, value) {
    updateCart({
      itemKey: itemStateKey,
      id: id,
      value: value,
    });
    //this.forceUpdate();
  }

  const { loading, data } = useQuery(GET_PRODUCT, {
    variables: { id: elemState.id },
  });

  if (loading) return <div>Loading...</div>;
  else {
    const product = data.product;
    return (
      <div className={styles.item}>
        <div className={styles.controls}>
          <div className={styles.itemTitle}>
            {product.name}
            <br />
            {product.brand}
          </div>
          <div className={styles.itemPrice}>
            {symbol} {getCurrencyAmount(product.prices)}
          </div>
          <Attributes elem={elem} handleSelect={handleSelect} />
        </div>
        <div className={styles.itemCount}>
          <button
            className={styles.itemPlus}
            onClick={() => {
              incrementQuantityCart(itemKey);
            }}
          >
            <div className={styles.text}>+</div>
          </button>
          <div className={styles.itemCountDisplay}>{elem.quantity}</div>
          <button
            className={styles.itemMinus}
            onClick={() => {
              decrementQuantityCart(itemKey);
            }}
          >
            <div className={styles.text}>&#8211;</div>
          </button>
        </div>
        <div className={styles.itemImgContainer}>
          <img className={styles.itemImg} src={product.gallery[0]} alt="" />
        </div>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return { ...state.currency, cart: state.cart };
};

export default connect(stateToProps, {
  updateCart,
  incrementQuantityCart,
  decrementQuantityCart,
})(Item);
