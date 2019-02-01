import React, { Component } from "react";
import {UserConsumer} from "../../providers";
import {ModalComponent} from "../Modal";
import {Navbar, Nav, NavItem } from "react-bootstrap";
import API from "../../utils/API";

// import { Link } from "react-router-dom";
import "./style.css";

class NavBar extends Component {

  state = {
    show: false,
    registerUser: false,
    _id: "",
    email: "",
    password: "",
    userName:"",
    firstName: "",
    lastName: "",
    school: "",
    district: "",
    selectedCourse: "",
    courses: [
      "Biotechnology",
      "Biology",
      "Honors Biology",
      "AP Biology",
      "Life Sciences (middle grades)",
      "Chemistry",
      "Other"
              ],
    users: [],
    login: false,
    loggedInUser: ""
  };

  componentDidMount = () => {

    const cookieUserId = this.readCookie("_uid");
    this.setState({_id: cookieUserId});
    this.props.idChanged(cookieUserId);
  }
   readCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  }
  handleClose = () => {
    this.setState({ show: false,
                    registerUser: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleSubmit = () => {
    const newUserLogin = {   userName: this.state.userName,
      password: this.state.password
      }
    API.userLogin(newUserLogin)
    .then(res => {
      if(res.data !== "Incorrect Password"){
        this.props.idChanged(res.data._id, res.data.userName);
        this.setState({
          login: true,
          loggedInUser: res.data.firstName + " " + res.data.lastName,
          _id: res.data._id
            })
        console.log(`Logged in ${this.state.login} as ${this.state.loggedInUser}, id: ${this.props.currentId}`)
        document.cookie = `_uid=${this.props.currentId};`;
        this.handleClose();
        this.setState({
          login: true,
          loggedInUser: this.state.firstName + " " + this.state.lastName,
          email: "",
          password: "",
          userName: "",
          firstName: "",
          lastName: "",
          school: "",
          district: "",
          selectedCourse: ""
          });
      }else{
        console.log("password or user invalid");
      }
    })
    .catch(err => {
      console.log("Error");
      console.log(err);
      });

  };

  handleRegister = () => {
    this.setState({ registerUser: true });
  }
  handleRegisterSubmit = () => {
    const newUser = {   email: this.state.email,
      password: this.state.password,
      userName:this.state.userName,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      school: this.state.school,
      district: this.state.district,
      course: this.state.selectedCourse
      }
    API.getUser("/" + newUser.userName)
    .then(res => {
      if(res.user === this.state.userName){

      }else{
        API.createUser(newUser)
        .then(res => {
          document.cookie = `userName=${this.props.userName}; userId=${this.props.userId};`;
          this.setState({
            login: true,
            loggedInUser: this.state.firstName + " " + this.state.lastName,
            email: "",
            password: "",
            userName: "",
            firstName: "",
            lastName: "",
            school: "",
            district: "",
            selectedCourse: ""
            });
        }).catch(err => console.log(err));
      }
    })
    .catch(err => console.log(err));
    this.handleClose();
  }
  handleUserLogIn = () => {
    this.setState({ registerUser: false});
  }
  handleSignOut = () => {
    console.log("sign out");
    this.setState({loggedInUser: null})
    this.props.idChanged("", "");
    document.cookie = `_uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

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
            <NavItem eventKey={2} href="/donate">
              Donate
            </NavItem>
            {this.state._id ? (
                <NavItem eventKey={3}  onClick={this.handleSignOut}>
                Sign Out
                </NavItem>
                ):(
                <NavItem eventKey={3}  onClick={this.handleShow}>
                    Login/Regiser
                </NavItem>
                )}

          </Nav>
        </Navbar.Collapse>
        </Navbar>
        <ModalComponent
        state = {this.state}
        handleClose = {this.handleClose}
        handleShow = {this.handleShow}
        handleSubmit = {this.handleSubmit}
        handleInputChange = {this.handleInputChange}
        handleUserLogIn = {this.handleUserLogIn}
        handleRegister = {this.handleRegister}
        handleRegisterSubmit = {this.handleRegisterSubmit}
        />
        </div>
      )
    }
    }
// Added to connect NavConsumer
// To pass props to AccountUpdate
// Before component initialization
// As the NavUpdate.state requires
// The new props
const NavUpdate = props => (
  <UserConsumer>
    {({ id, userName, idChanged  }) => (
      <NavBar
        currentId={id}
        currentUserName={userName}
        idChanged={idChanged}
      />
    )}
  </UserConsumer>
)
export default NavUpdate;
