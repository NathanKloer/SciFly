import React, { Component } from "react";
//import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import {  MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import "../style.css";

class ConfirmationContainer extends Component {
    constructor(){
      super();

      //Products Quantities to update:
      this.quantityData = [];
    }
    state = {
      order: []
    }

    componentDidMount() {
      this.setState({order:  this.props.location.state.order});
      this.quantityData = this.props.location.state.order.map(product => {
        return(
          {
            _id: product._id,
            newStockQuantity: product.newStockQuantity
          }
        );
      })//map
      this.updateStock(this.quantityData);
    }//componentDidMount

    //Assemble parameters and Pass the data to the API for updates
    updateStock = (data) => {
      let baseURL = "/stock"
      this.updateStockQuantity(baseURL, data);
    }
    //Initialize the state variables with search results
  updateStockQuantity = (baseURL, data) => {
    API.putQuantity(baseURL, data)
      .then(res => {
        // console.log("API CALL HAS STARTED!");
      })
      .catch(err => console.log(err));
  };
    render() {
      return (
        <MDBContainer>
        <MDBCard className="main-confirmation my-5 px-5 pb-5">

            <h1>Request Confirmation Page</h1>
            <h3>User: {this.props.location.state.order[0].userName}</h3>
            <h3>Order ID: {this.props.location.state.order[0].orderId}</h3>
              <div>
              <h3>Items Ordered:</h3>
                <ol>
                    {this.props.location.state.order.map(product => {

                  return (
                      <p key = {product._id}><li>Name: {product.productName} | Quantity: {product.orderQuantity}</li></p>
                      )
                    })
                  }
                </ol>
              </div>
            <br/>

        </MDBCard>
        </MDBContainer>

    );//return
  }//render
}

export default ConfirmationContainer;
