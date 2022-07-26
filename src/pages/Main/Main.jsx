import React, { Component } from "react";
import styles from "./Main.module.scss";
import img1 from "../../assets/png/img.png";
import buyIcon from "../../assets/svg/buyIcon.svg";

class Main extends Component {
  render() {
    return (
      <div className={styles.main}>
        <h2 className={styles.title}>Category name</h2>
        <div className={styles.products}>
          {/*first elem*/}
          <div className={styles.product}>
            <div className={styles.card}>
              <div className={styles.buyIconContainer}>
                <img className={styles.buyIcon} src={buyIcon} alt="" />
              </div>
              <img className={styles.cardImage} src={img1}></img>
              <br />
              <div className={styles.cardTitle}>Apollo Running Sport</div>
              <h5 className={styles.cardPrice}>$50.00</h5>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.cardStockOut}>
              <div className={styles.outStock}>out of stock</div>
              <img className={styles.cardImage} src={img1}></img>
              <br />
              <div className={styles.cardTitle}>Apollo Running Sport</div>
              <h5 className={styles.cardPrice}>$50.00</h5>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.card}>
              <div className={styles.buyIconContainer}>
                <img className={styles.buyIcon} src={buyIcon} alt="" />
              </div>
              <img className={styles.cardImage} src={img1}></img>
              <br />
              <div className={styles.cardTitle}>Apollo Running Sport</div>
              <h5 className={styles.cardPrice}>$50.00</h5>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.card}>
              <div className={styles.buyIconContainer}>
                <img className={styles.buyIcon} src={buyIcon} alt="" />
              </div>
              <img className={styles.cardImage} src={img1}></img>
              <br />
              <div className={styles.cardTitle}>Apollo Running Sport</div>
              <h5 className={styles.cardPrice}>$50.00</h5>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.card}>
              <div className={styles.buyIconContainer}>
                <img className={styles.buyIcon} src={buyIcon} alt="" />
              </div>
              <img className={styles.cardImage} src={img1}></img>
              <br />
              <div className={styles.cardTitle}>Apollo Running Sport</div>
              <h5 className={styles.cardPrice}>$50.00</h5>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.card}>
              <div className={styles.buyIconContainer}>
                <img className={styles.buyIcon} src={buyIcon} alt="" />
              </div>
              <img className={styles.cardImage} src={img1}></img>
              <br />
              <div className={styles.cardTitle}>Apollo Running Sport</div>
              <h5 className={styles.cardPrice}>$50.00</h5>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.card}>
              <div className={styles.buyIconContainer}>
                <img className={styles.buyIcon} src={buyIcon} alt="" />
              </div>
              <img className={styles.cardImage} src={img1}></img>
              <br />
              <div className={styles.cardTitle}>Apollo Running Sport</div>
              <h5 className={styles.cardPrice}>$50.00</h5>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.card}>
              <div className={styles.buyIconContainer}>
                <img className={styles.buyIcon} src={buyIcon} alt="" />
              </div>
              <img className={styles.cardImage} src={img1}></img>
              <br />
              <div className={styles.cardTitle}>Apollo Running Sport</div>
              <h5 className={styles.cardPrice}>$50.00</h5>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.card}>
              <div className={styles.buyIconContainer}>
                <img className={styles.buyIcon} src={buyIcon} alt="" />
              </div>
              <img className={styles.cardImage} src={img1}></img>
              <br />
              <div className={styles.cardTitle}>Apollo Running Sport</div>
              <h5 className={styles.cardPrice}>$50.00</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
