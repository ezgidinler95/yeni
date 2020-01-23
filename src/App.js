import React, { Component } from "react";
import Navi from "./Navi";
import Catagory from "./Category";
import Product from "./Product";
import { Container, Col, Row } from "reactstrap";

export default class App extends Component {
  state = {
    currentCategory: ""
  };
  changeCategory = category => {
    this.setState({
      currentCategory: category.categoryName
    });
  };

  render() {
    let productInfo = { title: "ProductList" };
    let categoryInfo = { title: "CategoryList" };
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <Catagory
                changeCategory={this.changeCategory}
                info={categoryInfo}
                currentCategory={this.state.currentCategory}
              />
            </Col>
            <Col xs="9">
              <Product
                info={productInfo}
                currentCategory={this.state.currentCategory}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
