import React, { useState } from "react";
import styles from "./DetailsComponent.module.scss";
import GET_PRODUCT from "../../queries/GET_PRODUCT";
import { connect } from "react-redux";
import Attributes from "./Attributes/Attributes";
import Gallery from "./Gallery";
import { addCart } from "../../app/cartSlicer";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import { useQuery } from "@apollo/client";
import { AttributeContext } from "../../context/AttributeContext";

function DetailsComponent({ label, addCart, symbol }) {
  const [selectImage, setSelectImage] = useState(0);
  const [productAttributes, setProductAttributes] = useState({});
  const [rerenderFlag, setRerenderFlag] = useState(false);

  const navigate = useNavigate();

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
    navigate("/");
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
            {/*wrapped with context to provide data link to attribute component*/}
            <AttributeContext.Provider value={handleSelect}>
              <Attributes
                attributes={product.attributes}
                productAttributes={productAttributes}
              />
            </AttributeContext.Provider>

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

const currencyStateToProps = (state) => {
  return state.currency;
};

export default connect(currencyStateToProps, { addCart })(DetailsComponent);
