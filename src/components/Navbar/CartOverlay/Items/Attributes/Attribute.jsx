import React from "react";
import styles from "../../CartOverlayComponent.module.scss";
import AttributeButtons from "./AttributeButtons";

function Attribute({ attribute, elem }) {
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
        <AttributeButtons elem={elem} attribute={attribute} />
      </div>
    </div>
  );
}

export default Attribute;
