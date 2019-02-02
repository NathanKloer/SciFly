import React, { Component } from "react";
import API from "../utils/API";
import OrgSearchForm from "../components/OrgSearchForm";
import history from "../history"
import readCookie from "../utils/RCAPI";
import { Col, Row, Container } from "../components/Grid";

class HomeContainer extends Component {
  state = {
    products: [],
    product: {},
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
    // this.loadBooks();
    const updateorg = readCookie("org");
    this.setState({organization: updateorg});
    // console.log("My ID = "+this.props.value.id);
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
        cb(res);//01122019:SaveAndDisplay the Data:
        history.push({
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
<div>
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
  </div>
    );
  }
}

export default HomeContainer;
