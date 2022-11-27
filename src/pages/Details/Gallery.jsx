import React from "react";
import styles from "./Details.module.scss";

function Gallery({product, selectImage,onHover}){
  function handleHover(key) {
    onHover(key);
  }

  return (
      <>
        <div className={styles.gallery}>
          {product.gallery.map((img, index) => {
            return (
              <img
                className={
                  selectImage === index ? styles.active : ""
                }
                src={img}
                alt={""}
                key={index}
                onMouseOver={() => {
                  handleHover(index);
                }}
              />
            );
          })}
        </div>
      </>
    );

}

export default Gallery;
