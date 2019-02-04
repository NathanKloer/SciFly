import React, { Component } from "react";
import API from "../utils/API";
import OrgSearchForm from "../components/OrgSearchForm";
import history from "../history"
import readCookie from "../utils/RCAPI";
import {Carousel, Grid } from "react-bootstrap";
import "../style.css";

class HomeContainer extends Component {
  state = {
    products: [],
    organization: ""
  };

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
       <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://recap.princeton.edu/sites/default/files/inline-images/559_0.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Parts-to-Purpose</h3>
              <p>Our Mission is to...</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Grid container center text>
          <Grid row>
            <Grid col> Test 1</Grid>

            <Grid col> <h5>Search by Organization</h5>
        <OrgSearchForm orgSearchEvent={this.handleOrgSearch}/></Grid>

          </Grid>

        </Grid>




      </React.Fragment>
    );
  }
}

export default HomeContainer;
