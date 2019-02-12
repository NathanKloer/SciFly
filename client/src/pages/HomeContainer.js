import React, { Component } from "react";
import "../style.css";
import CarouselPage from "../components/Carousel";
import {  MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView } from "mdbreact";

class HomeContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <React.Fragment>
        <CarouselPage />
        <MDBContainer>
          <MDBCard className="my-5 px-5" id="home-page-org-search">
            <MDBCardBody>
              <hr />
              <MDBRow>
                <MDBCol lg="7">
                  <h3 id="search-org" className="font-weight-bold">
                    <strong>Search by Organization</strong>
                  </h3>
                  <p className="landingtext">
                    Are you looking for a "part to purpose"? Please select an organization above to see what donations they have available within their inventory to provide to the cause at need.
                  </p>
                </MDBCol>
                <MDBCol lg="5">
                  <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                    <img
                      className="img-fluid"
                      src={window.location.origin + "/img/Organization_781x521.png"}
                      alt=""
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight" />
                    </a>
                  </MDBView>
                </MDBCol>
              </MDBRow>
              <hr />
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </React.Fragment>
    );
  }
}

export default HomeContainer;
