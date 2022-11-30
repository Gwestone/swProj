import React from "react";
import styles from "../../Cart.module.scss";
import AttributeButtons from "./AttributeButtons";

function Attribute({ attribute, elem, handleSelect }) {
  return (
    <div>
      <div className={styles.itemSize}>{attribute.name}:</div>
      <div
        className={
          attribute.type === "text"
            ? styles.itemSizeSelector
            : styles.itemColorSelector
        }
      >
        <AttributeButtons
          elem={elem}
          attribute={attribute}
          handleSelect={handleSelect}
        />
      </div>
    </div>
  );
}

export default Attribute;
