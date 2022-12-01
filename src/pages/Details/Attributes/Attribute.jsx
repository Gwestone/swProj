import React, { useEffect } from "react";
import styles from "../DetailsComponent.module.scss";

function Attribute({ onSelect, id, items, productAttributes, type, name }) {
  useEffect(() => {
    onSelect(id, items[0].id);

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, items]);

  let toFind = null;

  if (id in productAttributes) toFind = productAttributes[id];

  if (type === "text") {
    return (
      <div className="attributes">
        <div className={styles.textLabel}>{name}:</div>
        <div className={styles.buttonsGroup}>
          {items.map((elem, index) => {
            return (
              <button
                className={elem.id === toFind ? styles.active : ""}
                onClick={(_) => onSelect(id, elem.id)}
                key={index}
              >
                {elem.value}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
  if (type === "swatch") {
    return (
      <div className="attributes">
        <div className={styles.colorLabel}>{name}:</div>
        <div className={styles.pallet}>
          {items.map((elem, index) => {
            return (
              <button
                className={elem.id === toFind ? styles.active : ""}
                onClick={(_) => onSelect(id, elem.id)}
                style={{ background: elem.value }}
                key={index}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Attribute;
