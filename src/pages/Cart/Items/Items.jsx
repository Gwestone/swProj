import React, { Component } from "react";
import Item from "./Item";
import { connect } from "react-redux";

class Items extends Component {
  render() {
    console.log(this.props.cart);
    return this.props.cart.map((elem, index) => {
      return <Item elem={elem} key={index} />;
    });
  }
}

const cartStateToProps = (state) => {
  return state.cart;
};

export default connect(cartStateToProps, null)(Items);