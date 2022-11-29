import { Query } from "@apollo/client/react/components";
import GET_ATTRIBUTES from "../../../../../queries/GET_ATTRIBUTES";
import Attribute from "./Attribute";
import React from "react";

function Attributes({ elem, handleSelect }) {
  return (
    <Query query={GET_ATTRIBUTES} variables={{ id: elem.id }}>
      {({ loading, data }) => {
        if (loading) return <div>loading...</div>;
        else
          return data.product.attributes.map((attribute, index) => {
            return (
              <Attribute
                key={index}
                elem={elem}
                attribute={attribute}
                handleSelect={(id, value) => {
                  handleSelect(id, value);
                }}
              />
            );
          });
      }}
    </Query>
  );
}

export default Attributes;
