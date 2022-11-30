import React, { Component } from "react";
import "./assets/css/App.scss";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/MainComponent";
import Details from "./pages/Details/DetailsComponent";
import Cart from "./pages/Cart/CartComponent";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <NavbarComponent />
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
