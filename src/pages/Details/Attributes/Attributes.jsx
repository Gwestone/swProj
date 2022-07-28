import React, { Component } from "react";
import styles from "../Details.module.scss";
import Attribute from "./Attribute";

class Attributes extends Component {
  constructor(props) {
    super(props);
  }

  renderSelectors() {
    return this.props.attributes.map((elem, index) => {
      return (
        <Attribute
          name={elem.name}
          type={elem.type}
          id={elem.id}
          items={elem.items}
          key={index}
        />
      );
    });

    // if (this.state.texts) {
    //   return (
    //     <>
    //       <div className={styles.sizeLabel}>Size:</div>
    //       <div className={styles.buttonsGroup}>
    //         {/*<button className={styles.active}>XS</button>*/}
    //         {this.state.texts.items.map((elem, index) => {
    //           return <button key={index}>{elem.value}</button>;
    //         })}
    //       </div>
    //     </>
    //   );
    // }
  }

  render() {
    return (
      <div className="attributes">
        {/*{this.renderTextSelector()}*/}
        {/*make 2*/}
        {this.renderSelectors()}
      </div>
    );
  }
}

export default Attributes;
