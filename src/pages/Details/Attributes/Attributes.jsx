import React  from "react";
import Attribute from "./Attribute";

//TODO solve bug with selection
function Attributes({onSelect, attributes, productAttributes}){

  function renderSelectors() {
    return attributes.map((elem, index) => {
      return (
        <Attribute
          name={elem.name}
          type={elem.type}
          id={elem.id}
          items={elem.items}
          key={index}
          onSelect={(id, value) => onSelect(id, value)}
          productAttributes={productAttributes}
        />
      );
    });
  }

    return (
      <div className="attributes">
        {/*{this.renderTextSelector()}*/}
        {/*make 2*/}
        {renderSelectors()}
      </div>
    );
}

export default Attributes;
