import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Router, Route, Switch } from "react-router-dom";
import Provider from './providers';
// import Consumer from './consumer';
import HomeContainer from "./pages/HomeContainer";
import SearchUpdate from "./pages/SearchContainer";
import ConfirmationContainer from "./pages/ConfirmationContainer";
import DonateContainer from "./pages/DonateContainer";
import NoMatch from "./pages/NoMatch";
import NavUpdate from "./components/NavBar";
import history from "./history";
import "./style.css";
import './App.css';
// import NavUpdate from './components/NavBar';


function App() {
    return (
      <Provider>
          <Router history={history}>
            {/* Router must have one and only one child tag */}
            <div>
            <NavUpdate/>
              <Switch>
                {/* Route just registers which component should displayed depending on the url path*/}
                <Route exact path="/" component={HomeContainer} />
                <Route exact path="/home/:organization" component={HomeContainer} />
                <Route exact path="/search" component={SearchUpdate} />
                {/* <Route exact path="/search" render = {(props) => <SearchContainer {...props}/>}
                /> */}
                <Route exact path="/search/:category" component={SearchUpdate} />
                <Route exact path="/confirmation" component={ConfirmationContainer} />
                <Route exact path="/donate" component={DonateContainer} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </Router>
      </Provider>
    );
  }

export default App;
