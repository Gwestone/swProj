import React, { Component } from "react";

class Price extends Component {
  getPrice() {
    const prices = this.props.prices;
    return prices.find((price) => {
      if (price.currency.label === this.props.selected) {
        return { symbol: price.currency.symbol, amount: price.amount };
      }
      return false;
    });
  }

  render() {
    const price = this.getPrice();
    return (
      <>
        {price.currency.symbol} {price.amount}
      </>
    );
  }
}

export default Price;
