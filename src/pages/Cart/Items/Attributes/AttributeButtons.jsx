import React, { Component } from "react";
import styles from "../../Cart.module.scss";

class AttributeButtons extends Component {
  handleSelect(id, value) {
    this.props.handleSelect(id, value);
  }

  render() {
    const elem = this.props.elem;
    const attribute = this.props.attribute;
    return (
      <>
        {attribute.items.map((attributeOption, index) => {
          if (attribute.type === "text")
            return (
              <button
                key={index}
                onClick={() => {
                  this.handleSelect(attribute.id, attributeOption.id);
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
                  this.handleSelect(attribute.id, attributeOption.id);
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
}

export default AttributeButtons;
