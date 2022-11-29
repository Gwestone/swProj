import React from "react";
import styles from "../../CartOverlay.module.scss";

//(AttributeButtons)isolated logic of every cart->item->attribute->attributeButton
function AttributeButtons({ handleSelect, attribute, elem }) {
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
        else return <div>cant recognise attribute type</div>;
      })}
    </>
  );
}

export default AttributeButtons;
