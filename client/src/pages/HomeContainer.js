import React, { Component } from "react";
import API from "../utils/API";
import OrgSearchForm from "../components/OrgSearchForm";
import history from "../history";
import readCookie from "../utils/RCAPI";
import "../style.css";
import CarouselPage from "../components/Carousel";
import {  MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

class HomeContainer extends Component {
  state = {
    organization: "",
    ddlOrganizations: []
  };

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

  componentDidMount() {
    this.getDDLOrganizationValues(this.loadDDLOrganizationValues);
    const updateorg = readCookie("org");
    this.setState({organization: updateorg});
  }

  handleOrgSearch = event =>{
    var ddlOrgElem = document.getElementById("ddlOrgList");
    var organization = ddlOrgElem.options[ddlOrgElem.selectedIndex].text.split(' ').join('_');
    this.setState({organization: organization});
    document.cookie = `org=${organization};`;
    history.push(
      {
        pathname: '/search'
      }
    );
  };
//Populates the ddlOrgList values
  getDDLOrganizationValues = (cb) => {
    let baseURL = "/organizations";
    API.getOrganizationValues(baseURL)
      .then(res => {
        //callback to store state variables
        cb(res);
      })
      .catch(err => console.log(err));
  };

  loadDDLOrganizationValues = (res) => {
    this.setState({ ddlOrganizations: res.data});
    const ddlOrgListElem = document.getElementById( 'ddlOrgList' );

    for( let organization in this.state.ddlOrganizations ) {
      ddlOrgListElem.add( new Option( this.state.ddlOrganizations[organization] ) );
    };
  };

  render() {
    return (
      <React.Fragment>
        <CarouselPage />
        <MDBContainer>
          <MDBCard className="my-5 px-5 pb-5" id="home-page-org-search">
            <MDBCardBody>
              <hr className="my-5" />
              <MDBRow>
                <MDBCol lg="7">
                  <h3 className="font-weight-bold">
                    <strong>Search by Organization</strong>
                  </h3>
                  <p class="landingtext">
                    Are you looking for a "part to purpose"? Please select an organization to see what donations they have available within their inventory to provide to the cause at need.
                  </p>
                  <OrgSearchForm orgSearchEvent={this.handleOrgSearch}/>
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
              <hr className="my-5" />
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </React.Fragment>
    );
  }
}

export default HomeContainer;
