import React, { Component } from "react";
import API from "../utils/API";
import OrgSearchForm from "../components/OrgSearchForm";
import history from "../history"
import readCookie from "../utils/RCAPI";
class HomeContainer extends Component {
  state = {
    products: [],
    product: {},
    organization: ""
  };

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
      <React.Fragment>
        <h1>I AM THE HOME PAGE</h1>
        <br/>
        <h5>Search by Organization</h5>
        <OrgSearchForm orgSearchEvent={this.handleOrgSearch}/>
      </React.Fragment>
    );
  }
}

export default HomeContainer;
