import React, { Component } from "react";
// import React from "react";
import { Col, Row, Container } from "../components/Grid";

class ConfirmationContainer extends Component {
  // function ConfirmationContainer(props) {
      constructor(){
        super();
        // this.isCatBtnClicked = false;

        //Array of products returned from the API
        // this.products = [];

        //Array of orders to submit
        this.orders = [];

        //Array that is assembled from the inventory table, must be reset when items are deleted from shopping cart
        // this.cartItems = [];
        // console.log("Constructor Order = ", this.props.location.state.orders);
      }

    state = {
      //contains a list of items from the api, one render behind
      orders: []
    }
    componentDidMount() {
      // this.loadBooks();
      console.log("Did Mount Order = ", this.props.location.state.orders);
      this.setState({orders:  this.props.location.state.orders});

      console.log("State variables = "+this.state.orders);
    }
    render() {
      return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <h1>I AM THE CONFIRMATION PAGE</h1>
            <h1>Order NUMBER: {this.props.location.state.orders.length}</h1>
            <h1>Order ID: {this.props.location.state.orders.map(order => order._id)}</h1>
            {/* <h1>Products: {this.props.location.state.orders.map(order => {
              return (
                <div>

                </div>
                {(order.products[0].product.productName)}
            )}</h1> */}
            {/* <h1>Products: {this.props.location.state.orders.map({order => order.products[0].product.map = (prod) => {prod.productName}})}</h1> */}
            <h1>User: {this.props.location.state.orders.map(order => order.user.userName)}</h1>
            <br/>
          </Col>
        </Row>
      </Container>
    );//return
  }//render
}

export default ConfirmationContainer;
