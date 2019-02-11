import React, { Component } from "react";
import "../style.css";
import {  MDBContainer } from "mdbreact";
import PartnerBlock from "../components/PartnerBlock";


class DonateContainer extends Component {

  render() {
    return (
      <React.Fragment>
        <MDBContainer>
          <PartnerBlock/>
        </MDBContainer>
      </React.Fragment>
    );
  }
}

export default DonateContainer;
