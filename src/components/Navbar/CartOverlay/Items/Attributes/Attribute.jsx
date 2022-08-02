import React, { Component } from "react";
import styles from "../../CartOverlay.module.scss";
import AttributeButtons from "./AttributeButtons";

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
          <AttributeButtons
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
