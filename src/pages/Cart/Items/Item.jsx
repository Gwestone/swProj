import React, { useState } from "react";
import styles from "../Cart.module.scss";
import GET_PRODUCT from "../../../queries/GET_PRODUCT";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import GET_ATTRIBUTES from "../../../queries/GET_ATTRIBUTES";
import {
  decrementQuantityCart,
  incrementQuantityCart,
  updateCart,
} from "../../../app/cartSlicer";
import Attribute from "./Attributes/Attribute";
import { useQuery } from "@apollo/client";

function Item({
  label,
  updateCart,
  itemKey,
  elem,
  symbol,
  incrementQuantityCart,
  decrementQuantityCart,
}) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     itemKey: this.props.itemKey,
  //     elem: this.props.elem,
  //     galleryElem: 0,
  //   };
  // }

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

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id: elem.id },
  });

  function unwrapProduct(loading, error, data) {
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
            <Query query={GET_ATTRIBUTES} variables={{ id: elem.id }}>
              {({ loading, data }) => {
                if (loading) return <div>loading...</div>;
                else
                  return data.product.attributes.map((attribute, index) => {
                    return (
                      <Attribute
                        key={index}
                        elem={elem}
                        attribute={attribute}
                        handleSelect={(id, value) => {
                          handleSelect(id, value);
                        }}
                      />
                    );
                  });
              }}
            </Query>
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

  return <>{unwrapProduct(loading, error, data)}</>;
}

const stateToProps = (state) => {
  return { ...state.currency, cart: state.cart };
};

export default connect(stateToProps, {
  updateCart,
  incrementQuantityCart,
  decrementQuantityCart,
})(Item);
