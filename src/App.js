import React, { Component } from "react";
import "./assets/css/App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Dimmer from "./components/Dimmer/Dimmer";
import Details from "./pages/Details/Details";
import Cart from "./pages/Cart/Cart";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Dimmer>
            <Routes>
              <Route path={"/"} element={<Main />} />

              <Route path="/details/:id" element={<Details />} />

              <Route path={"/cart"} element={<Cart />} />
            </Routes>
          </Dimmer>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
