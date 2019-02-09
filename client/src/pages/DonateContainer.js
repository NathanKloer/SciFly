import React, { Component } from "react";
import {  MDBContainer } from "mdbreact";
import PartnerBlock from "../components/PartnerBlock";


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
