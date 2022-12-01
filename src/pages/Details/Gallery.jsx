import React from "react";
import styles from "./DetailsComponent.module.scss";

function Gallery({ product, selectImage, onHover }) {
  //render list of selection images
  return (
    <>
      <div className={styles.gallery}>
        {product.gallery.map((img, index) => {
          return (
            <img
              className={selectImage === index ? styles.active : ""}
              src={img}
              alt={""}
              key={index}
              onMouseOver={() => {
                onHover(index);
              }}
            />
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
