import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from "./pages/HomeContainer";
import SearchContainer from "./pages/SearchContainer";
import ConfirmationContainer from "./pages/ConfirmationContainer";
import DonateContainer from "./pages/DonateContainer";
import NoMatchContainer from "./pages/NoMatchContainer";
// import Header from "./components/Header";
import NavBar from "./components/NavBar";
import "./style.css";
import './App.css';

function App() {
    return (
      <Router>
        {/* Router must have one and only one child tag */}
        <div>
          <NavBar />
          <Switch>
            {/* Route just registers which component should displayed depending on the url path*/}
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/home/:organization" component={HomeContainer} />
            <Route exact path="/search" component={SearchContainer} />
            <Route exact path="/search/:category" component={SearchContainer} />
            <Route exact path="/confirmation" component={ConfirmationContainer} />
            <Route exact path="/donate" component={DonateContainer} />
            <Route component={NoMatchContainer} />
          </Switch>
        </div>
      </Router>
    );
  }

export default App;
