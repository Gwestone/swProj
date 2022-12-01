import React from "react";
import styles from "../../CartComponent.module.scss";
import AttributeButtons from "./AttributeButtons";

function Attribute({ attribute, elem }) {
  return (
    <div>
      {/*render label for attributes*/}
      <div className={styles.itemSize}>{attribute.name}:</div>
      <div
        className={
          attribute.type === "text"
            ? styles.itemSizeSelector
            : styles.itemColorSelector
        }
      >
        {/*render attribute buttons*/}
        <AttributeButtons elem={elem} attribute={attribute} />
      </div>
    </div>
  );
}

export default Attribute;
