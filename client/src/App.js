import React, { Component } from "react";
import API from "./utils/API";
import { Router, Route, Switch } from "react-router-dom";
import Provider from './providers';
import HomeContainer from "./pages/HomeContainer";
import SearchUpdate from "./pages/SearchContainer";
import ConfirmationContainer from "./pages/ConfirmationContainer";
import DonateContainer from "./pages/DonateContainer";
import NoMatch from "./pages/NoMatch";
import NavUpdate from "./components/NavBar";
import history from "./history";
import "./style.css";
import './App.css';

class App extends Component {

  componentDidMount() {
    this.getDDLOrganizationValues(this.loadDDLOrganizationValues);
  }

  state = {
    organization: "",
    ddlOrganizations: []
  };

  handleOrgSearch = event =>{
    var ddlOrgElem = document.getElementById("ddlOrgList");
    var organization = ddlOrgElem.options[ddlOrgElem.selectedIndex].text.split(' ').join('_');
    this.setState({organization: organization});

    //IMPORTANT: Whenever an organization is picked from the
    //nav bar drop down menu, redirect to that page.
    window.open('/search/'+organization);
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
      <Provider>
        <Router history={history}>
          {/* Router must have one and only one child tag */}
          <div>
            <NavUpdate orgSearchEvent={this.handleOrgSearch} />
            <Switch>
              {/* Route just registers which component should displayed depending on the url path*/}
              <Route exact path="/" component={HomeContainer} />
              <Route exact path="/home/:organization" component={HomeContainer} />
              <Route exact path="/search/:organization" component={SearchUpdate} />
              <Route exact path="/confirmation/:orderId" component={ConfirmationContainer} />
              <Route exact path="/donate" component={DonateContainer} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
