import React, { Component } from "react";
import "./assets/css/App.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Details from "./pages/Details/Details";
import Cart from "./pages/Cart/Cart";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path={"/cart"} element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
