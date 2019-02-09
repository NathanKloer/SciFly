import React, { Component } from "react";
//import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import {  MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import "../style.css";
import { MDBListGroup, MDBListGroupItem, MDBBadge } from "mdbreact";

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
      if(this.props.location.state){
        let order = this.props.location.state.order;
        this.setState({order:  order});
        this.quantityData = this.props.location.state.order.map(product => {
          return(
            {
              _id: product._id,
              newStockQuantity: product.newStockQuantity
            }
          );
        })//map
        this.updateStock(this.quantityData);
      }
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
      })
      .catch(err => console.log(err));
  };
    render() {
      return (
        <MDBContainer>
          {this.props.location.state?(
          <MDBCard className="main-confirmation my-5 px-5 pb-5">
            <h1>Request Confirmation</h1>
            <h3>User: {this.props.location.state.order[0].userName}</h3>
            <h3>Organization: {this.props.location.state.order[0].organization}</h3>
            <h3>Order ID: {this.props.location.state.order[0].orderId}</h3>
            <div>
              <h3>Items Ordered:</h3>
              <ol>
                {this.props.location.state.order.map(product => {

                  return (
                    <p key={product._id}><li>Name: {product.productName} | Quantity: {product.orderQuantity}</li></p>
                  )
                })
                }
              </ol>
            </div>
            <br />
          </MDBCard>):<MDBCard className="main-confirmation text-center my-5 px-5 pb-5"><h1>No requests have been made</h1></MDBCard>}
            
          <MDBRow>
          <div className="col-md-6 col-md-offset-3 splattext">
            <p id="splattext" font-size="200px">Visit our <a href="../Donate">Donate</a> page for more information about the charities we work with and donation oppertunities</p>
          </div>
          </MDBRow>
        </MDBContainer>


    );//return
  }//render
}

export default ConfirmationContainer;
