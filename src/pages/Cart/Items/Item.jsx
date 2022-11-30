import React, { useState } from "react";
import styles from "../CartComponent.module.scss";
import GET_PRODUCT from "../../../queries/GET_PRODUCT";
import { connect } from "react-redux";
import {
  decrementQuantityCart,
  incrementQuantityCart,
  updateCart,
} from "../../../app/cartSlicer";
import { useQuery } from "@apollo/client";
import Attributes from "./Attributes/Attributes";

function Item({
  label,
  updateCart,
  itemKey,
  elem,
  symbol,
  incrementQuantityCart,
  decrementQuantityCart,
}) {
  const [galleryElem, setGalleryElem] = useState(0);

  function renderDecreaseButton(product) {
    return (
      <>
        {product.gallery.length > 1 ? (
          <button onClick={() => handleDecreaseGallery(product.gallery.length)}>
            &#60;
          </button>
        ) : (
          ""
        )}
      </>
    );
  }

  function renderIncreaseButton(product) {
    return (
      <>
        {product.gallery.length > 1 ? (
          <button onClick={() => handleIncreaseGallery(product.gallery.length)}>
            &#62;
          </button>
        ) : (
          ""
        )}
      </>
    );
  }

  function handleIncreaseGallery(size) {
    let toSet = galleryElem + 1;
    if (galleryElem === size - 1) {
      toSet = 0;
    }
    setGalleryElem(toSet);
  }

  function handleDecreaseGallery(size) {
    let toSet = galleryElem - 1;
    if (galleryElem === 0) {
      toSet = size - 1;
    }
    setGalleryElem(toSet);
  }

  function getCurrencyAmount(prices) {
    return prices.find((price) => {
      return price.currency.label === label;
    }).amount;
  }

  function handleSelect(id, value) {
    updateCart({
      itemKey: itemKey,
      id: id,
      value: value,
    });
  }

  const { loading, data } = useQuery(GET_PRODUCT, {
    variables: { id: elem.id },
  });

  //main render code
  if (loading) return <div>Loading...</div>;
  else {
    const product = data.product;
    return (
      <div className={styles.elem}>
        <div className={styles.controls}>
          <div className={styles.itemTitle}>{product.name}</div>
          <div className={styles.itemSubtitle}>{product.brand}</div>
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
            +
          </button>
          <div className={styles.itemCountDisplay}>{elem.quantity}</div>
          <button
            className={styles.itemMinus}
            onClick={() => {
              decrementQuantityCart(itemKey);
            }}
          >
            _
          </button>
        </div>
        <div className={styles.itemImgContainer}>
          <img
            className={styles.itemImg}
            src={product.gallery[galleryElem]}
            alt=""
          />
          <div className={styles.switchGroup}>
            <div>
              {renderDecreaseButton(product)}
              {renderIncreaseButton(product)}
            </div>
          </div>
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
