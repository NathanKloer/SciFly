import React, { Component } from "react";
import API from "./utils/API";
import { Router, Route, Switch} from "react-router-dom";
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

  constructor(){
    super();
    this.organization= '';
  }
  componentDidMount() {
    this.getDDLOrganizationValues(this.loadDDLOrganizationValues);
  }

  state = {
    organization: "",
    ddlOrganizations: []
  };

  /***************************************************************************
   * Method:handleOrgSearch
   * Children: NavBar Component
   * Descriptions: Whenever an option is selected in the Organizational Search
   * DropDown (in NavBar) redirect the app to the page of the organization
   * selected and set the organization state.
   * *************************************************************************/
  handleOrgSearch = event =>{
    var ddlOrgElem = document.getElementById("ddlOrgList");
    this.organization = ddlOrgElem.options[ddlOrgElem.selectedIndex].text.split(' ').join('_');
    this.setState({organization: this.organization});

    //IMPORTANT: Redirect to the selected organization's page.
    history.push({
      pathname: '/search/'+this.organization
    });

    //IMPORTANT: Automatically reset the selection, so the page
    //will be refreshed if the same organization is selected.
    document.getElementById('ddlOrgList').selectedIndex = 0;

    //refresh page when new org selected.
    window.location.reload();
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
              {/* Pass the selected organization to the SearchContainer Page for a re-render*/}
              <Route exact path="/search/:organization"
                render={() => <SearchUpdate organization = {this.state.organization}/>} />
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
