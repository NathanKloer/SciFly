import React, { Component } from "react";
import {  MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import PartnerBlock from "../components/PartnerBlock";
import { Col, Row, Container } from "../components/Grid";


class DonateContainer extends Component {

  render() {
    return (
      <React.Fragment>
        <MDBContainer>
          <PartnerBlock onClick={this.handleFormSearch}/>
        </MDBContainer>
      </React.Fragment>
    );
  }
}

export default DonateContainer;
