import React, { useContext, useEffect } from "react";
import styles from "../DetailsComponent.module.scss";
import { AttributeContext } from "../../../context/AttributeContext";

function Attribute({ id, items, productAttributes, type, name }) {
  //get data from attributes
  const onSelect = useContext(AttributeContext);

  useEffect(() => {
    onSelect(id, items[0].id);

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, items]);

  let toFind = null;

  //if attribute is in range of attributes select it
  if (id in productAttributes) toFind = productAttributes[id];

  if (type === "text") {
    return (
      <div className="attributes">
        {/*render attribute name*/}
        <div className={styles.textLabel}>{name}:</div>
        <div className={styles.buttonsGroup}>
          {/*render attributes buttons*/}
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
        {/*render attribute name*/}
        <div className={styles.colorLabel}>{name}:</div>
        <div className={styles.pallet}>
          {/*render attributes buttons*/}
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
