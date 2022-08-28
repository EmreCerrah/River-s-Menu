import React, { Component, useState } from "react";
import { connect } from "react-redux";
import {
  Badge,
  Row,
  Button,
  CardImg,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardGroup,
  Container,
} from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";

import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { BarLoader } from "react-spinners";
import LoadingScreen from "../common/LoadingScreen";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
    
  }

  notify = () =>
    toast.success("Added to cart!", {
      theme: "dark",
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product });
    this.notify();
  };

  render() {
    return (
      <div>
        <h4>
          <Badge color="warning">Products</Badge>
          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
        </h4>

        <LoadingScreen className='align-content-center' loading={this.props.products.length===0?true:false} />

        <div className="d-flex align-content-center flex-wrap ">
          {
          this.props.products.map((product) => (
            <div key={product.id} className=" p-2">
              <Card
                color="dark"
                inverse
                style={{
                  minHeight: "30rem",
                  width: "16rem",
                  alignItems: "center",
                }}
              >
                <CardImg
                  top
                  width="100%"
                  style={{ maxHeight: "16rem" }}
                  src={product.img}
                  alt="Card image cap"
                />
                <CardBody style={{ color: "white" }} className="text-center">
                  <CardTitle>{product.name}</CardTitle>
                  <CardSubtitle>{product.price}$</CardSubtitle>
                  <CardText>{product.dsc}</CardText>
                  <Button
                    color="success"
                    onClick={() => {
                      this.addToCart(product);
                      this.props.actions.setLoading(false)
                    }}
                  >
                    Add
                  </Button>
                </CardBody>
              </Card>
            </div >
          ))}
        </div>

        <ToastContainer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
     
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
