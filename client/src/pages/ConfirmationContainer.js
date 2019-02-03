import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

class ConfirmationContainer extends Component {
      constructor(){
        super();
        // this.isCatBtnClicked = false;

        //Array of products returned from the API
        // this.products = [];

        //Array of orders to submit
        this.orders = [];

        //Products Quantities to update:
        this.quantityData = [];

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
      // console.log("Did Mount Order = ", this.props.location.state.orders);
      this.setState({orders:  this.props.location.state.orders});
      this.quantityData = this.props.location.state.orders[0].products.map(product => {
        return(
          {
            _id: product.product._id,
            stockQuantity: product.productQuantity
          }
        );
        // return (
        //     console.log("ProductID = ", product.product._id, "Quantity = "+product.productQuantity)
        // );
      })//map

      this.updateStock(this.quantityData);

      // console.log("State variables = "+this.state.orders);
    }//componentDidMount

    callback = (res) => {
      // console.log();
      // console.log("API CALL HAS ENDED!");
      // console.log();
      //console.log("Res = "+JSON.stringify(res));
      if(res){
        //this.clearTableDiv('table-contents');
        this.products = res.data;
        this.setState({ products: res.data.items});
      }
    }

    //Assemble parameters and Pass the data to the API for updates
    updateStock = (data) => {
      let baseURL = "/stock"
      this.updateStockQuantity(baseURL, data, this.callback);
    }
    //Initialize the state variables with search results
  updateStockQuantity = (baseURL, data, cb) => {
    API.putQuantity(baseURL, data)
      .then(res => {
        // console.log("API CALL HAS STARTED!");
        //callback to store state variables
        cb(res);//01122019:SaveAndDisplay the Data:
      })
      .catch(err => console.log(err));
  };
    render() {
      return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <h1>I AM THE CONFIRMATION PAGE</h1>
            <h3>User: {this.props.location.state.orders[0].user.userName}</h3>
            <h3>Order ID: {this.props.location.state.orders[0]._id}</h3>
              <div>
              <h3>Items Ordered:</h3>
                <ol>
                  {this.props.location.state.orders[0].products.map(product => {
                  return (
                      <h5 key = {product.product._id}><li>{product.product.productName} Quantity: {product.productQuantity}</li></h5>
                      )
                    })
                  }
                </ol>
              </div>
            <br/>
          </Col>
        </Row>
      </Container>
    );//return
  }//render
}

export default ConfirmationContainer;
