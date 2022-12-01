import GET_ATTRIBUTES from "../../../../queries/GET_ATTRIBUTES";
import Attribute from "./Attribute";
import React from "react";
import { useQuery } from "@apollo/client";

function Attributes({ elem }) {
  const { loading, data } = useQuery(GET_ATTRIBUTES, {
    variables: { id: elem.id },
  });

  if (loading) return <div>loading...</div>;
  else
    return data.product.attributes.map((attribute, index) => {
      return <Attribute key={index} elem={elem} attribute={attribute} />;
    });
}

export default Attributes;
