import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import Login from "../logIn";
// import { Link } from "react-router-dom";
import "./style.css";

class NavBar extends Component {

  state = {
    show: false,
    registerUser: false
  };

  componentDidMount = () => {
    // this.loadBooks();
  }

  handleClose = () => {
    this.setState({ show: false,
                    registerUser: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleSubmit = () => {
    this.handleClose();
  }

  handleRegister = () => {
    this.setState({ registerUser: true });
  }
  handleRegisterSubmit = () => {
    this.handleClose();
  }
  handleUserLogIn = () => {
    this.setState({ registerUser: false});
  }

  render() {
      return (
        <div>
<Navbar  staticTop collapseOnSelect id="nav-bar">
        <Navbar.Header >
          <Navbar.Brand>
            <a href="/">Parts-To-Purpose</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/search">
              Search
            </NavItem>
            <NavItem eventKey={2} onClick={this.handleShow}>
              Login/Regiser
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Login
            show={this.state.show}
            registerUser={this.state.registerUser}
            handleClose={this.handleClose}
            handleSubmit={this.handleSubmit}
            handleRegister={this.handleRegister}
            handleRegisterSubmit={this.handleRegisterSubmit}
            handleUserLogIn={this.handleUserLogIn}
        />
        </div>
      )
    }
    }

export default NavBar;
