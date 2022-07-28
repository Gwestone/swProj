import React, { Component } from "react";
import styles from "./Details.module.scss";
import GET_PRODUCT from "../../queries/GET_PRODUCT";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import Price from "./Price";
import Attributes from "./Attributes/Attributes";
import Gallery from "./Gallery";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectImage: 0,
    };
  }

  handleHover(key) {
    this.setState({ ...this.state, selectImage: key });
  }

  render() {
    const id = window.location.pathname.split("/").pop();

    return (
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
                    <Attributes attributes={product.attributes} />
                    <div className={styles.costLabel}>Price:</div>
                    <div className={styles.cost}>
                      <Price
                        prices={product.prices}
                        selected={this.props.label}
                      />
                    </div>
                    <div>
                      <button className={styles.addCart}>Add to cart</button>
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
    );
  }
}

const currencyStateToProps = (state) => {
  return state.currency;
};

export default connect(currencyStateToProps, null)(Details);
