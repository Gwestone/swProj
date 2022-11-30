import React, { useState } from "react";
import styles from "./DetailsComponent.module.scss";
import GET_PRODUCT from "../../queries/GET_PRODUCT";
import { connect } from "react-redux";
import Attributes from "./Attributes/Attributes";
import Gallery from "./Gallery";
import { addCart } from "../../app/cartSlicer";
import { Navigate } from "react-router-dom";
import parse from "html-react-parser";
import { useQuery } from "@apollo/client";

function DetailsComponent({ label, addCart, symbol }) {
  const [selectImage, setSelectImage] = useState(0);
  const [productAttributes, setProductAttributes] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [rerenderFlag, setRerenderFlag] = useState(false);

  function getPrice(prices) {
    return prices.find((price) => {
      return price.currency.label === label;
    }).amount;
  }

  function handleHover(key) {
    setSelectImage(key);
  }

  function handleSelect(id, value) {
    productAttributes[id] = value;
    setProductAttributes(productAttributes);
    rerender();
  }

  function rerender() {
    setRerenderFlag(!rerenderFlag);
  }

  function handleAddCart(id, productAttributes, prices) {
    addCart({
      id: id,
      productAttributes: productAttributes,
      quantity: 1,
      prices: prices,
    });
    setRedirect(true);
  }

  function renderBuyButton(product, id) {
    return product.inStock ? (
      <button
        onClick={() => handleAddCart(id, productAttributes, product.prices)}
        className={styles.addCart}
      >
        Add to cart
      </button>
    ) : (
      <div className={styles.outOfStock}>Out of stock</div>
    );
  }

  const id = window.location.pathname.split("/").pop();

  const { loading, data } = useQuery(GET_PRODUCT, {
    variables: { id: id },
  });

  /**
   * @param {{
   *  product:{
   *    id: string,
   *    name: string,
   *    gallery:[string],
   *    attributes:[{
   *        id: string,
   *        name: string,
   *        type: string,
   *        items:[{
   *            displayValue: string,
   *            value: string,
   *            id: string
   *          }]
   *        }],
   *       prices: [{
   *          currency: {
   *              label: string,
   *              symbol: string
   *          },
   *          amount: number
   *        }],
   *       description: string
   *      }
   *     }} data
   *     @param loading boolean
   */
  function unwrapProduct(loading, data) {
    if (loading) return <div>Loading...</div>;
    else {
      const product = data.product;
      return (
        <div className={styles.main}>
          <div className={styles.content}>
            <Gallery
              product={product}
              onHover={(key) => handleHover(key)}
              selectedImage={selectImage}
            />
            <div className={styles.image}>
              <img src={product.gallery[selectImage]} alt={""} />
            </div>
            <div className={styles.controls}>
              <div className={styles.title}>{product.name}</div>
              <div className={styles.subtitle}>{product.brand}</div>
              {/*make 1*/}
              <Attributes
                attributes={product.attributes}
                onSelect={(id, value) => {
                  handleSelect(id, value);
                }}
                productAttributes={productAttributes}
              />
              <div className={styles.costLabel}>Price:</div>
              <div className={styles.cost}>
                {symbol} {getPrice(product.prices)}
              </div>
              {/*buy button*/}
              <div>{renderBuyButton(product, id)}</div>
              {/*description*/}
              <div className={styles.description}>
                {parse(product.description)}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  //TODO: rewrite redirect function and refactor unwrap function
  return (
    <>
      {unwrapProduct(loading, data)}
      {redirect ? <Navigate to={"/"} /> : ""}
    </>
  );
}

const currencyStateToProps = (state) => {
  return state.currency;
};

export default connect(currencyStateToProps, { addCart })(DetailsComponent);
