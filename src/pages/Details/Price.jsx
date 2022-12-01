import React from "react";

function Price({ prices, selected }) {
  //get currently selected currency from props
  function getPrice() {
    return prices.find((price) => {
      if (price.currency.label === selected) {
        return { symbol: price.currency.symbol, amount: price.amount };
      }
      return false;
    });
  }

  const price = getPrice();
  return (
    <>
      {price.currency.symbol} {price.amount}
    </>
  );
}

export default Price;
