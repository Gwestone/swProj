import React, { Component } from "react";
import styles from "./Details.module.scss";
import GET_PRODUCT from "../../queries/GET_PRODUCT";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import Price from "./Price";
import Attributes from "./Attributes/Attributes";
import Gallery from "./Gallery";
import { addCart } from "../../app/cartSlicer";
import { Navigate } from "react-router-dom";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectImage: 0,
      productAttributes: {},
      redirect: false,
    };
  }

  handleHover(key) {
    this.setState({ ...this.state, selectImage: key });
  }

  handleSelect(id, value) {
    let productAttributes = this.state.productAttributes;
    productAttributes[id] = value;
    this.setState({
      ...this.state,
      productAttributes: productAttributes,
    });
  }

  handleAddCart(id, productAttributes) {
    console.log(id);
    console.log(productAttributes);
    this.props.addCart({
      id: id,
      productAttributes: productAttributes,
      quantity: 1,
    });
    this.setState({
      ...this.state,
      redirect: true,
    });
  }

  render() {
    const id = window.location.pathname.split("/").pop();

    return (
      <>
        <Query query={GET_PRODUCT} variables={{ id: id }}>
          {({ loading, data }) => {
            if (loading) return <div>Loading...</div>;
            else {
              const product = data.product;
              return (
                <div className={styles.main}>
                  <div className={styles.content}>
                    <Gallery
                      product={product}
                      onHover={(key) => this.handleHover(key)}
                      selectedImage={this.state.selectImage}
                    />
                    <div className={styles.image}>
                      <img
                        src={product.gallery[this.state.selectImage]}
                        alt={""}
                      />
                    </div>
                    <div className={styles.controls}>
                      <div className={styles.title}>{product.name}</div>
                      <div className={styles.subtitle}>{product.brand}</div>
                      {/*make 1*/}
                      <Attributes
                        attributes={product.attributes}
                        onSelect={(id, value) => {
                          this.handleSelect(id, value);
                        }}
                        productAttributes={this.state.productAttributes}
                      />
                      <div className={styles.costLabel}>Price:</div>
                      <div className={styles.cost}>
                        <Price
                          prices={product.prices}
                          selected={this.props.label}
                        />
                      </div>
                      <div>
                        <button
                          onClick={() =>
                            this.handleAddCart(id, this.state.productAttributes)
                          }
                          className={styles.addCart}
                        >
                          Add to cart
                        </button>
                      </div>
                      <div className={styles.description}>
                        {product.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          }}
        </Query>
        {this.state.redirect ? <Navigate to={"/"} /> : ""}
      </>
    );
  }
}

const currencyStateToProps = (state) => {
  return state.currency;
};

export default connect(currencyStateToProps, { addCart })(Details);
