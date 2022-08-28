import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import CategoryList from "../categories/CategoryList";
import ProductList from "../products/ProductList";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import { connect } from "react-redux";

class Dasboard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="3">
            <CategoryList />
          </Col>

          <Col xs="9">
           <ProductList/>
          </Col>
        </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dasboard);
