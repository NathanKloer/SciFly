import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import OrgSearchForm from "../components/OrgSearchForm";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class HomeContainer extends Component {
  state = {
    products: [],
    product: {},
    organization: "",
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    // this.loadBooks();
  }

  callback = (res) => {
    this.setState({ products: res.data.items});
  }

  // handleFormSearch = event =>{
  //   var ddlElem = document.getElementById("ddlList");
  //   var strUser = e.options[e.selectedIndex].text;

  //   if (this.state.organization){
  //     event.preventDefault();
  //     //Search for all books in Google Books API
  //     this.searchProducts(this.state.organization, this.callback);
  //   }//if
  // };

  //Initialize the state variables with search results
  searchProducts = (query, cb) => {
    API.search(query)
      .then(res => {
        // console.log("API CALL HAS STARTED!");
        //callback to store state variables
        cb(res);//01122019:SaveAndDisplay the Data:
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <h1>I AM THE HOME PAGE</h1>
        <OrgSearchForm onClick={this.handleFormSearch}/>
      </React.Fragment>
    );
  }
}

export default HomeContainer;
