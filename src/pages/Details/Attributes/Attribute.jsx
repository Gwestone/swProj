import React, { Component } from "react";
import styles from "../Details.module.scss";

class Attribute extends Component {
  constructor(props) {
    super(props);
  }

  renderSelectors() {
    if (this.props.type === "text") {
      return (
        <>
          <div className={styles.textLabel}>{this.props.name}:</div>
          <div className={styles.buttonsGroup}>
            {/*<button className={styles.active}>XS</button>*/}
            {this.props.items.map((elem, index) => {
              return <button key={index}>{elem.value}</button>;
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
                <button style={{ background: elem.value }} key={index}></button>
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
