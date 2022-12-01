import React from "react";
import Item from "./Item";
import { connect } from "react-redux";

function Items({ cart }) {
  //render all items in cart

  return (
    <>
      {cart.map((elem, index) => {
        return <Item elem={elem} key={index} itemKey={index} />;
      })}
    </>
  );
}

const cartStateToProps = (state) => {
  return state.cart;
};

export default connect(cartStateToProps, null)(Items);
