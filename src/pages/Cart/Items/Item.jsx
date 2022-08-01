import React, { Component } from "react";
import styles from "../Cart.module.scss";
import img from "../../../assets/png/img2.png";
import GET_PRODUCT from "../../../queries/GET_PRODUCT";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import GET_ATTRIBUTES from "../../../queries/GET_ATTRIBUTES";
import {
  decrementQuantityCart,
  incrementQuantityCart,
  updateCart,
} from "../../../app/cartSlicer";
import AttributeOption from "./Attributes/AttributeOption/AttributeOption";
import Attribute from "./Attributes/Attribute";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemKey: this.props.itemKey,
      elem: this.props.elem,
    };
  }

  getCurrencyAmount(prices) {
    return prices.find((price) => {
      if (price.currency.label === this.props.label) {
        return true;
      }
    }).amount;
  }

  handleSelect(id, value) {
    this.props.updateCart({
      itemKey: this.state.itemKey,
      id: id,
      value: value,
    });
    this.forceUpdate();
  }

  render() {
    const elem = this.props.elem;
    return (
      <Query query={GET_PRODUCT} variables={{ id: elem.id }}>
        {({ loading, data }) => {
          if (loading) return <div>Loading...</div>;
          else {
            const product = data.product;
            return (
              <div className={styles.elem}>
                <div className={styles.controls}>
                  <div className={styles.itemTitle}>{product.name}</div>
                  <div className={styles.itemSubtitle}>{product.brand}</div>
                  <div className={styles.itemPrice}>
                    {this.props.symbol} {this.getCurrencyAmount(product.prices)}
                  </div>
                  <Query query={GET_ATTRIBUTES} variables={{ id: elem.id }}>
                    {({ loading, data }) => {
                      if (loading) return <div>loading...</div>;
                      else
                        return data.product.attributes.map(
                          (attribute, index) => {
                            return (
                              <Attribute
                                key={index}
                                elem={elem}
                                attribute={attribute}
                                handleSelect={(id, value) => {
                                  this.handleSelect(id, value);
                                }}
                              />
                            );
                          }
                        );
                    }}
                  </Query>
                </div>
                <div className={styles.itemCount}>
                  <button
                    className={styles.itemPlus}
                    onClick={() => {
                      this.props.incrementQuantityCart(this.props.itemKey);
                    }}
                  >
                    +
                  </button>
                  <div className={styles.itemCountDisplay}>{elem.quantity}</div>
                  <button
                    className={styles.itemMinus}
                    onClick={() => {
                      this.props.decrementQuantityCart(this.props.itemKey);
                    }}
                  >
                    _
                  </button>
                </div>
                <div className={styles.itemImgContainer}>
                  <img
                    className={styles.itemImg}
                    src={product.gallery[0]}
                    alt=""
                  />
                </div>
              </div>
            );
          }
        }}
      </Query>
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
