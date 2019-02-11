import React, { Component } from "react";
import Touchable from "rc-touchable";
import {UserConsumer} from "../../providers";
import {ModalComponent} from "../Modal";
import OrganizationSearchList from "../OrganizationSearchList";
import API from "../../utils/API";
import readCookie from "../../utils/RCAPI";
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler,
        MDBCollapse, MDBNavItem, MDBNavLink, MDBDropdown,
        MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,
        MDBIcon} from 'mdbreact';

class NavBar extends Component {

  state = {
    isOpen: false,
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
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleClose = () => {
    this.setState({ show: false,
                    registerUser: false
                  });
  }

  handleShow = () => {
    this.setState({
                    show: true,
                    registerUser: false
                  });
  }

  handleSubmit = () => {
    const newUserLogin = {  userName: this.state.userName,
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
          window.location.reload();
      }else{
        this.setState({loginError: true})
      }
    })
    .catch(err => this.setState({loginError: true}));

  };

  handleRegister = () => {
    this.setState({
                    show: true,
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
    window.location.reload();
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
        <MDBNavbar  color="stylish-color"
                    dark
                    expand="md"
                    style={{ marginBottom: "20px" }}>
          <MDBContainer>
          <MDBNavbarBrand>
            <a href="/">
            <strong className="white-text" >Parts-to-Purpose</strong>
              <img  className="navicon d-inline-block align-top"
                    alt="P2P"
                    src={window.location.origin + "/img/p2pnticon.png"}
                    href="/"
                    style={{marginTop: 0, marginLeft: 10}}/>
            </a>
          </MDBNavbarBrand>
          <Touchable onPress={this.toggleCollapse}>
            <MDBNavbarToggler />
          </Touchable>
          <MDBCollapse
                        id="navbarCollapse"
                        isOpen={this.state.isOpen}
                        navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <OrganizationSearchList
                                      eventKey={1}
                                      orgSearchEvent={this.props.orgSearchEvent}>
              </OrganizationSearchList>
            </MDBNavItem>
            <MDBNavItem >
              <MDBNavLink to="/donate">Donate</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      {this.state._id ? (<MDBIcon icon="user-check"/>
                                        ):(
                                        <MDBIcon icon="user" />
                                        )}
                    </MDBDropdownToggle>
                    {this.state._id ? (
                        <MDBDropdownMenu className="dropdown-default" right>
                          <Touchable onPress={this.handleSignOut}>
                            <MDBDropdownItem>Sign Out</MDBDropdownItem>
                          </Touchable>
                        </MDBDropdownMenu>
                    ) : (
                        <MDBDropdownMenu className="dropdown-default" right>
                          <Touchable onPress={this.handleShow}>
                            <MDBDropdownItem>Login</MDBDropdownItem>
                          </Touchable>
                          <Touchable onPress={this.handleRegister}>
                            <MDBDropdownItem>Register</MDBDropdownItem>
                          </Touchable>
                        </MDBDropdownMenu>
                      )}
                  </MDBDropdown>
          </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
        </MDBContainer>
        </MDBNavbar>


       <ModalComponent
                        state = {this.state}
                        handleClose = {this.handleClose}
                        handleShow = {this.handleShow}
                        handleSubmit = {this.handleSubmit}
                        handleInputChange = {this.handleInputChange}
                        handleUserLogIn = {this.handleUserLogIn}
                        handleRegister = {this.handleRegister}
                        handleRegisterSubmit = {this.handleRegisterSubmit}/>
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
              {...props}
              currentId={id}
              currentUserName={userName}
              idChanged={idChanged}
      />
    )}
  </UserConsumer>
)
export default NavUpdate;
