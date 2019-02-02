import React, { Component } from "react";

import PartnerBlock from "../components/PartnerBlock";

class DonateContainer extends Component {

  render() {
    return (
      <React.Fragment>
        <PartnerBlock onClick={this.handleFormSearch}/>
      </React.Fragment>
    );
  }
}

export default DonateContainer;
