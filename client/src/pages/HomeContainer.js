import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import OrgSearchForm from "../components/OrgSearchForm";
import history from "../history"
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import CardExample from "../components/Jumbotron";
import {Container, Row, Column} from "../components/Grid";

class HomeContainer extends Component {
  state = {
    products: [],
    product: {},
    organization: ""
  };

  componentDidMount() {
    // this.loadBooks();
    // console.log("My ID = "+this.props.value.id);
  }

  // callback = (res) => {
  //   this.setState({ products: res.data.items});
  // }

  handleOrgSearch = event =>{
    var ddlOrgElem = document.getElementById("ddlOrgList");
    var organization = ddlOrgElem.options[ddlOrgElem.selectedIndex].text;
    // console.log("Organization to Search = "+organization);
    this.setState({organization: organization});
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
        // console.log("API CALL HAS STARTED!");
        //callback to store state variables
        cb(res);//01122019:SaveAndDisplay the Data:
        this.props.history.push({
          pathname: '/search',
          state: {products: res.data}
        });
      })
      .catch(err => console.log(err));
  };

  callback = (res) => {
    // console.log();
    // console.log("API CALL HAS ENDED!");
    // console.log();
    //console.log("Res = "+JSON.stringify(res));
    if(res){
      this.setState({ products: res.data.items});
    }
  }
  render() {
    return (

      <React.Fragment>
        <MDBView src="https://recap.princeton.edu/sites/default/files/inline-images/559_0.jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
              <h3>We are proud to partner with various organizations to bring their inventory ("Parts") into a freely searchable online database that will allow you to search and re-"Purpose" the donated items. Please check our stock, and if you find something you can use, you'll be able to create an account and reserve the items</h3>
              <h5>Select an organization to get started:</h5>
              <OrgSearchForm orgSearchEvent={this.handleOrgSearch}/>
              <CardExample />
            </MDBMask>
          </MDBView>
      </React.Fragment>
    );
  }
}

export default HomeContainer;
