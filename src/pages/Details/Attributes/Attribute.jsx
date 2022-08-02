import React, { Component } from "react";
import styles from "../Details.module.scss";

class Attribute extends Component {
  handleClick(id, value) {
    this.props.onSelect(id, value);
  }

  componentDidMount() {
    // console.log(`${this.props.id}-${this.props.items[0].id}`);
    this.handleClick(this.props.id, this.props.items[0].id);
  }

  renderSelectors() {
    let productAttributes = this.props.productAttributes;
    let toFind = null;
    if (this.props.id in productAttributes) {
      toFind = productAttributes[this.props.id];
    }
    if (this.props.type === "text") {
      return (
        <>
          <div className={styles.textLabel}>{this.props.name}:</div>
          <div className={styles.buttonsGroup}>
            {/*<button className={styles.active}>XS</button>*/}
            {this.props.items.map((elem, index) => {
              return (
                <button
                  className={elem.id === toFind ? styles.active : ""}
                  onClick={(_) => this.handleClick(this.props.id, elem.id)}
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
    if (this.props.type === "swatch") {
      return (
        <>
          <div className={styles.colorLabel}>{this.props.name}:</div>
          <div className={styles.pallet}>
            {/*<button className={styles.active}>XS</button>*/}
            {this.props.items.map((elem, index) => {
              return (
                <button
                  className={elem.id === toFind ? styles.active : ""}
                  onClick={(_) => this.handleClick(this.props.id, elem.id)}
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

  render() {
    return <div className="attributes">{this.renderSelectors()}</div>;
  }
}

export default Attribute;
