import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import API from "../utils/API";
import {  MDBContainer, MDBCard, MDBRow, MDBIcon } from "mdbreact";

import "../style.css";

class ConfirmationContainerToPrint extends Component {
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
            <h3 className="font-weight-bold">Request Confirmation</h3>
            <br />
            <h6 className="font-italic">Thank you for your order request! You will receive an email confirmation with your Order ID. Please print this page for your records. Someone from {this.props.location.state.order[0].organization} will be in touch with you to schedule an appointment or delivery.</h6>
            <br />
            <h6 className="font-italic">Thank you for using Parts-to-Purpose; we hope that you will be able to put these parts to good purpose!</h6>
            <hr />
            <h6 className="font-weight-normal">User: &nbsp; {this.props.location.state.order[0].userName}</h6>
            <h6 className="font-weight-normal">Organization: &nbsp; {this.props.location.state.order[0].organization}</h6>
            <h6 className="font-weight-normal">Order ID: &nbsp; {this.props.location.state.order[0].orderId}</h6>
            <hr />
            <div>
              <h6 className="text-uppercase font-weight-bold">Items Ordered:</h6>
              <br />
              <ol>
                {this.props.location.state.order.map(product => {

                  return (
                    <p key={product._id}><li>&nbsp;&nbsp;Item Name: &nbsp;{product.productName} &nbsp;| &nbsp;Quantity: {product.orderQuantity}</li></p>
                  )
                })
                }
              </ol>
            </div>
            <br />
          </MDBCard>):<MDBCard className="main-confirmation text-center my-5 px-5 pb-5"><h1>No requests have been made</h1></MDBCard>}

          <MDBRow>
          <div className="col-md-6 col-md-offset-3 splattext text-center mx-auto">
            <p>Visit our <a href="../Donate">Donate</a> page for more information about the charities we work with and donation oppertunities</p>
          </div>
          </MDBRow>
        </MDBContainer>


    );//return
  }//render
}

class ConfirmationContainer extends Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() =>
                        <div className="text-center">
                            <button
                                    className="link-button"
                                    color="info"
                                    size="sm">
                                    <MDBIcon icon="print" /> Print Confirmation
                            </button>
                        </div>
                    }
          content={() => this.componentRef}
        />
        <ConfirmationContainerToPrint
          {...this.props}
          ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default ConfirmationContainer;
