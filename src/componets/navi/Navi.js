import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import CartSummary from "../cart/CartSummary";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">River's Menu</NavbarBrand>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link style={{ textDecoration: "none" }} to={"product"}>
                <NavLink>Products</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link style={{ textDecoration: "none" }} to={"saveproduct"}>
                <NavLink>Save Products</NavLink>
              </Link>
            </NavItem>
            
            <NavItem>
              <NavLink href="https://github.com/EmreCerrah">GitHub</NavLink>
            </NavItem>
            <CartSummary />
          </Nav>
        </Navbar>
      </div>
    );
  }
}
