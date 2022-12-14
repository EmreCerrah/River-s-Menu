import React, { Component } from "react";
import { connect } from "react-redux";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";

class CartSummary extends Component {
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    );
  }

  renderSummary() {
    let total = 0;
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge
                color="danger"
                onClick={() =>
                  this.props.actions.removeFromCart(cartItem.product)
                }
                style={{ marginRight: "5px" }}
              >
                X
              </Badge>
              {cartItem.product.name}
              <Badge
                color="success"
                className=" p-2"
                style={{ marginLeft: "5px" }}
              >
                {cartItem.quantity}
              </Badge>
              <div style={{ display: "none" }}>
                {(total += this.getprice(cartItem.product) * cartItem.quantity)}
              </div>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>
            <Link to="/cart">Go Cart!</Link>{" "}
            <Badge
              color="warning"
              className=" p-2"
              style={{ marginLeft: "2rem" }}
            >
              {total}$
            </Badge>{" "}
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  getprice(product) {
    return parseFloat(product.price);
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeToCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
