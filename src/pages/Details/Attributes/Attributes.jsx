import React from "react";
import Attribute from "./Attribute";

function Attributes({ attributes, productAttributes }) {
  return (
    <div className="attributes">
      {" "}
      {/*render many attributes collections*/}
      {attributes.map((elem, index) => {
        return (
          <Attribute
            name={elem.name}
            type={elem.type}
            id={elem.id}
            items={elem.items}
            key={index}
            productAttributes={productAttributes}
          />
        );
      })}
    </div>
  );
}

export default Attributes;
