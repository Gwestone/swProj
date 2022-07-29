import React, { Component } from "react";
import styles from "../Cart.module.scss";
import img from "../../../assets/png/img2.png";
import GET_PRODUCT from "../../../queries/GET_PRODUCT";
import Gallery from "../../Details/Gallery";
import Attributes from "../../Details/Attributes/Attributes";
import Price from "../../Details/Price";
import { Query } from "@apollo/client/react/components";

class Item extends Component {
  render() {
    const elem = this.props.elem;
    console.log(elem);
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
                  {/*<div className={styles.itemPrice}>$50.00</div>*/}
                  {/*<div className={styles.itemSize}>Size:</div>*/}
                  {/*<div className={styles.itemSizeSelector}>*/}
                  {/*  <button className={styles.active}>XS</button>*/}
                  {/*  <button>S</button>*/}
                  {/*  <button>M</button>*/}
                  {/*  <button>L</button>*/}
                  {/*</div>*/}
                  {/*<div className={styles.itemColor}>Color:</div>*/}
                  {/*<div className={styles.itemColorSelector}>*/}
                  {/*  <button*/}
                  {/*      className={styles.active}*/}
                  {/*      style={{ background: "#D3D2D5" }}*/}
                  {/*  ></button>*/}
                  {/*  <button style={{ background: "#2B2B2B" }}></button>*/}
                  {/*  <button style={{ background: "#0F6450" }}></button>*/}
                  {/*</div>*/}
                </div>
                <div className={styles.itemCount}>
                  <button className={styles.itemPlus}>+</button>
                  <div className={styles.itemCountDisplay}>{elem.quality}</div>
                  <button className={styles.itemMinus}>_</button>
                </div>
                <div className={styles.itemImgContainer}>
                  <img className={styles.itemImg} src={img} alt="" />
                </div>
              </div>
            );
          }
        }}
      </Query>
    );
  }
}

export default Item;
