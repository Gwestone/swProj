import React, { Component } from "react";
import styles from "../Details.module.scss";
import Attribute from "./Attribute";

class Attributes extends Component {
  constructor(props) {
    super(props);
  }

  onSelect(id, value) {
    this.props.onSelect(id, value);
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
          onSelect={(id, value) => this.onSelect(id, value)}
          productAttributes={this.props.productAttributes}
        />
      );
    });
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
