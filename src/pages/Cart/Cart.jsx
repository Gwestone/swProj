import React, { Component } from "react";
import styles from "./Cart.module.scss";
import img from "../../assets/png/img2.png";

class Cart extends Component {
  render() {
    return (
      <div className={styles.main}>
        <h2 className={styles.title}>Cart</h2>
        <div className={styles.container}>
          {/*first elem*/}
          <div className={styles.elem}>
            <div className={styles.controls}>
              <div className={styles.itemTitle}>Apollo</div>
              <div className={styles.itemSubtitle}>Running Short</div>
              <div className={styles.itemPrice}>$50.00</div>
              <div className={styles.itemSize}>Size:</div>
              <div className={styles.itemSizeSelector}>
                <button className={styles.active}>XS</button>
                <button>S</button>
                <button>M</button>
                <button>L</button>
              </div>
              <div className={styles.itemColor}>Color:</div>
              <div className={styles.itemColorSelector}>
                <button
                  className={styles.active}
                  style={{ background: "#D3D2D5" }}
                ></button>
                <button style={{ background: "#2B2B2B" }}></button>
                <button style={{ background: "#0F6450" }}></button>
              </div>
            </div>
            <div className={styles.itemCount}>
              <button className={styles.itemPlus}>+</button>
              <div className={styles.itemCountDisplay}>1</div>
              <button className={styles.itemMinus}>_</button>
            </div>
            <div className={styles.itemImgContainer}>
              <img className={styles.itemImg} src={img} alt="" />
            </div>
          </div>
          {/*second elem*/}
          <div className={styles.elem}>
            <div className={styles.controls}>
              <div className={styles.itemTitle}>Apollo</div>
              <div className={styles.itemSubtitle}>Running Short</div>
              <div className={styles.itemPrice}>$50.00</div>
              <div className={styles.itemSize}>Size:</div>
              <div className={styles.itemSizeSelector}>
                <button>XS</button>
                <button className={styles.active}>S</button>
                <button>M</button>
                <button>L</button>
              </div>
              <div className={styles.itemColor}>Color:</div>
              <div className={styles.itemColorSelector}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
              </div>
            </div>
            <div className={styles.itemCount}>
              <button className={styles.itemPlus}>+</button>
              <div className={styles.itemCountDisplay}>1</div>
              <button className={styles.itemMinus}>_</button>
            </div>
            <div className={styles.itemImgContainer}>
              <img className={styles.itemImg} src={img} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.labels}>
            <div className={styles.label}>Tax 21%: </div>
            <div className={styles.label}>Quantity: </div>
            <div style={{ fontWeight: "500" }} className={styles.label}>
              Total:{" "}
            </div>
          </div>
          <div className={styles.numbers}>
            <div className={styles.number}>$42.00</div>
            <div className={styles.number}>3</div>
            <div className={styles.number}>$200.00</div>
          </div>
        </div>
        <div className={styles.payButtonContainer}>
          <button className={styles.payButton}>Order</button>
        </div>
      </div>
    );
  }
}

export default Cart;
