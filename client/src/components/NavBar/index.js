import React, { Component } from "react";
import {UserConsumer} from "../../providers";
import {ModalComponent} from "../Modal";
import {Navbar, Nav, NavItem } from "react-bootstrap";
import API from "../../utils/API";
import readCookie from "../../utils/RCAPI";

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
    loggedInUser: "",
    loginError: false,
    invalidEmail: false
  };

  componentDidMount = () => {
    const cookieUserId = readCookie("_uid");
    this.setState({_id: cookieUserId});
    this.props.idChanged(cookieUserId);
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
          selectedCourse: "",
          loginError: false,
          registerError: false,
          invalidEmail: false
          });
      }else{
        this.setState({loginError: true})
      }
    })
    .catch(err => this.setState({loginError: true}));

  };

  handleRegister = () => {
    this.setState({
                  registerUser: true,
                  login: false,
                  loggedInUser: "",
                  email: "",
                  password: "",
                  userName: "",
                  firstName: "",
                  lastName: "",
                  school: "",
                  district: "",
                  selectedCourse: "",
                  loginError: false,
                  registerError: false,
                  invalidEmail: false
                });
  }
  handleRegisterSubmit = () => {
    this.setState({
                  registerError: false,
                  invalidEmail: false
                  });
    const newUser = {   email: this.state.email,
                        password: this.state.password,
                        userName:this.state.userName,
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        school: this.state.school,
                        district: this.state.district,
                        course: this.state.selectedCourse
                    }
        API.createUser(newUser)
            .then(res => {
              if(res.data === "Already Exist"){
                this.setState({registerError: true});
              }else if(res.data === "this errorValidationError: email: Please enter a valid e-mail address"){
                this.setState({invalidEmail: true});
              }else{
              document.cookie = `_uid=${this.props.userId};`;
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
                selectedCourse: "",
                loginError: false,
                registerError: false,
                invalidEmail: false
                });
              this.handleClose();
              }
            })
            .catch(err =>{
              this.setState({registerError: true})});
    // })
    // .catch(err => this.setState({registerError: true}));

  }
  handleUserLogIn = () => {
    this.setState({
                  registerUser: false,
                  login: false,
                  loggedInUser: "",
                  email: "",
                  password: "",
                  userName: "",
                  firstName: "",
                  lastName: "",
                  school: "",
                  district: "",
                  selectedCourse: "",
                  loginError: false,
                  registerError: false
                 });
  }
  handleSignOut = () => {
    this.setState({_id: null})
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
