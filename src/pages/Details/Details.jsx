import React, { Component } from "react";
import styles from "./Details.module.scss";
import img1 from "../../assets/png/img.png";

class Details extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.gallery}>
            <img src={img1} alt={""} />
            <img src={img1} alt={""} />
            <img src={img1} alt={""} />
          </div>
          <div className={styles.image}>
            <img src={img1} alt={""} />
          </div>
          <div className={styles.controls}>
            <div className={styles.title}>Apollo</div>
            <div className={styles.subtitle}>Running Short</div>
            <div className={styles.sizeLabel}>Size:</div>
            <div className={styles.buttonsGroup}>
              <button className={styles.active}>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
            </div>
            <div className={styles.colorLabel}>Color:</div>
            <div className={styles.pallet}>
              <button
                className={styles.active}
                style={{ background: "#D3D2D5" }}
              ></button>
              <button style={{ background: "#2B2B2B" }}></button>
              <button style={{ background: "#0F6450" }}></button>
            </div>
            <div className={styles.costLabel}>Price:</div>
            <div className={styles.cost}>$50.00</div>
            <div>
              <button className={styles.addCart}>Add to cart</button>
            </div>
            <div className={styles.description}>
              Find stunning women's cocktail dresses and party dresses. Stand
              out in lace and metallic cocktail dresses and party dresses from
              all your favorite brands.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
