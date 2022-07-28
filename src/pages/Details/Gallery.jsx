import React, { Component } from "react";
import styles from "./Details.module.scss";

class Details extends Component {
  handleHover(key) {
    this.props.onHover(key);
  }

  render() {
    return (
      <>
        <div className={styles.gallery}>
          {this.props.product.gallery.map((img, index) => {
            return (
              <img
                className={
                  this.props.selectImage === index ? styles.active : ""
                }
                src={img}
                alt={""}
                key={index}
                onMouseOver={() => {
                  this.handleHover(index);
                }}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Details;
