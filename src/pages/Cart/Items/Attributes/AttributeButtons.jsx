import React, { useContext } from "react";
import styles from "../../CartComponent.module.scss";
import { AttributeContext } from "../../../../context/AttributeContext";

function AttributeButtons({ elem, attribute }) {
  const handleSelect = useContext(AttributeContext);

  return (
    <>
      {/*render all attributes buttons depends on type of data*/}
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
