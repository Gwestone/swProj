import React  from "react";
import styles from "../Details.module.scss";

function Attribute({onSelect, id, items, productAttributes, type, name}){
  function handleClick(id, value) {
    onSelect(id, value);
  }

  function renderSelectors() {
    let toFind = null;
    if (id in productAttributes) {
      toFind = productAttributes[id];
    }
    if (type === "text") {
      return (
        <>
          <div className={styles.textLabel}>{name}:</div>
          <div className={styles.buttonsGroup}>
            {/*<button className={styles.active}>XS</button>*/}
            {items.map((elem, index) => {
              return (
                <button
                  className={elem.id === toFind ? styles.active : ""}
                  onClick={(_) => handleClick(id, elem.id)}
                  key={index}
                >
                  {elem.value}
                </button>
              );
            })}
          </div>
        </>
      );
    }
    if (type === "swatch") {
      return (
        <>
          <div className={styles.colorLabel}>{name}:</div>
          <div className={styles.pallet}>
            {/*<button className={styles.active}>XS</button>*/}
            {items.map((elem, index) => {
              return (
                <button
                  className={elem.id === toFind ? styles.active : ""}
                  onClick={(_) => handleClick(id, elem.id)}
                  style={{ background: elem.value }}
                  key={index}
                ></button>
              );
            })}
          </div>
        </>
      );
    }
  }

  return <div className="attributes">{renderSelectors()}</div>;

}

export default Attribute;
