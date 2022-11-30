import React from "react";
import styles from "../../CartComponent.module.scss";

function AttributeButtons({ elem, attribute, handleSelect }) {
  return (
    <>
      {attribute.items.map((attributeOption, index) => {
        if (attribute.type === "text")
          return (
            <button
              key={index}
              onClick={() => {
                handleSelect(attribute.id, attributeOption.id);
              }}
              className={
                elem.productAttributes[attribute.id] === attributeOption.id
                  ? styles.active
                  : ""
              }
            >
              {attributeOption.value}
            </button>
          );
        else if (attribute.type === "swatch")
          return (
            <button
              key={index}
              onClick={() => {
                handleSelect(attribute.id, attributeOption.id);
              }}
              className={
                elem.productAttributes[attribute.id] === attributeOption.id
                  ? styles.active
                  : ""
              }
              style={{
                background: attributeOption.value,
              }}
            ></button>
          );
        return false;
      })}
    </>
  );
}

export default AttributeButtons;
