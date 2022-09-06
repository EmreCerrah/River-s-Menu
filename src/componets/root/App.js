import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "reactstrap";
import CartDetail from "../cart/CartDetail";
import Notfound from "../common/Notfound";
import Navi from "../navi/Navi";

import Dasboard from "./Dasboard";

export default class App extends Component {
  render() {
    return (
      <Container md="6" sm="">
        <Navi />
        <Routes>
          <Route exact path="/" element={<Dasboard />} />
          <Route exact path="/cart" element={<CartDetail />} />
          <Route path="/product" element={<Dasboard />} />

          <Route path="*" element={<Notfound />} />
        </Routes>
      </Container>
    );
  }
}
