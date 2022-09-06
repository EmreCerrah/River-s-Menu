import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Table, Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
class CartDetail extends Component {
  notify = (note) =>
    toast.error(note, {
      theme: "dark",
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    this.notify("Removed from Cart!");
  }

  getprice(product) {
    return parseFloat(product.price);
  }

  render() {
    let total = 0;
    return (
      <div>
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.product.name}</td>
                <td>{cartItem.product.price}$</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => this.removeFromCart(cartItem.product)}
                  >
                    Delete
                  </Button>
                  <div style={{ display: "none" }}>
                    {
                      (total +=
                        this.getprice(cartItem.product) * cartItem.quantity)
                    }
                  </div>
                </td>
              </tr>
            ))}
            <div>Total Price : {total}$</div>
          </tbody>
        </Table>
        <ToastContainer />
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

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
