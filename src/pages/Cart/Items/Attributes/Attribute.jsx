import React, { Component } from "react";
import styles from "../../Cart.module.scss";
import AttributeOption from "./AttributeOption/AttributeOption";

class Attribute extends Component {
  handleSelect(id, value) {
    this.props.handleSelect(id, value);
  }

  render() {
    const attribute = this.props.attribute;
    const elem = this.props.elem;
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
          <AttributeOption
            elem={elem}
            attribute={attribute}
            handleSelect={(id, value) => this.handleSelect(id, value)}
          />
        </div>
      </div>
    );
  }
}

export default Attribute;
