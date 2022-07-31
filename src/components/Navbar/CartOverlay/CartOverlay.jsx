import styles from "./CartOverlay.module.scss";
import React, { Component } from "react";
import cart from "../../../assets/svg/cart.svg";
import img from "../../../assets/png/img2.png";
import { Link, Navigate } from "react-router-dom";

export default class CartOverlay extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      redirect: false,
    });
  }

  render() {
    return (
      <div className={styles.dropdown}>
        <button className={styles.btn}>
          <img className={styles.icon} src={cart} alt="" />
        </button>
        <div className={styles.dropdownContent}>
          <div className={styles.title}>
            <div className={styles.myBag}>My bag, </div>
            <div className={styles.itemsCount}>3 items</div>
          </div>
          <div className={styles.container}>
            {/*first item*/}
            <div className={styles.item}>
              <div className={styles.controls}>
                <div className={styles.itemTitle}>
                  Apollo <br /> Running Short
                </div>
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
                    style={{ background: "#1D1F22" }}
                  ></button>
                  <button style={{ background: "#D3D2D5" }}></button>
                  <button style={{ background: "#0F6450" }}></button>
                </div>
              </div>
              <div className={styles.itemCount}>
                <button className={styles.itemPlus}>+</button>
                <div className={styles.itemCountDisplay}>1</div>
                <button className={styles.itemMinus}>-</button>
              </div>
              <div className={styles.itemImgContainer}>
                <img className={styles.itemImg} src={img} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.priceLabel}>
            <div className={styles.total}>Total </div>
            <div className={styles.sum}> $200.00</div>
          </div>
          <div className={styles.buttons}>
            <Link className={styles.viewButton} to={"/cart"}>
              View bag
            </Link>
            <Link className={styles.checkOutButton} to={"/cart"}>
              <div>Check out</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
