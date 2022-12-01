import styles from "../MainComponent.module.scss";
import buyIcon from "../../../assets/svg/buyIcon.svg";
import React from "react";

function addButton({ data, handleAddCart }) {
  if (data.inStock)
    return (
      <button
        className={styles.addToCart}
        onClick={(e) => handleAddCart(e, data.id, data.attributes, data.prices)}
      >
        <img className={styles.buyIcon} src={buyIcon} alt="" />
      </button>
    );
  else <></>;
}

export default addButton;
