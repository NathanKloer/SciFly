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
    products: [],
    organization: ""
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
    const updateorg = readCookie("org");
    this.setState({organization: updateorg});
  }


  handleOrgSearch = event =>{
    var ddlOrgElem = document.getElementById("ddlOrgList");
    var organization = ddlOrgElem.options[ddlOrgElem.selectedIndex].text;
    this.setState({organization: organization});
    document.cookie = `org=${organization};`;
    if (organization){
      event.preventDefault();
      const baseURL = "/products";
      this.loadByOrganization(baseURL, this.callback);
    }//if
  };

  //Initialize the state variables with search results
  loadByOrganization = (baseURL, cb) => {
    API.getOrganization(baseURL)
      .then(res => {
        //callback to store state variables
        cb(res);
        history.push({
          pathname: '/search',
          state: {products: res.data}
        });
      })
      .catch(err => console.log(err));
  };

  callback = (res) => {
    //console.log("Res = "+JSON.stringify(res));
    if(res){
      this.setState({ products: res.data.items});
    }
  }
  render() {
    return (
      <React.Fragment>
        <CarouselPage />
        <MDBContainer>
          <MDBCard className="my-5 px-5 pb-5">
            <MDBCardBody>
              <hr className="my-5" />
              <MDBRow>
                <MDBCol lg="7">
                  <h3 className="font-weight-bold mb-3 p-0">
                    <strong>Search by Organization</strong>
                  </h3>
                  <p>
                    Are you looking for a part to purpose? Please select an organization to see what donations they have available within their inventory to provide to the cause at need.
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
