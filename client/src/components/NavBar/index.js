import React, { Component } from "react";
import {UserConsumer} from "../../providers";
import { Modal, Navbar, Nav, NavItem, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Input, FormBtn, Dropdown, DropdownList } from "../LogIn";
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
    // let userContext = this.context;
  }

  handleClose = () => {
    this.setState({ show: false,
                    registerUser: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }
  loadUsers = () => {
    API.getBooks()
    .then(res =>
      this.setState({ savedBooks: res.data})
    )
    .catch(err => console.log(err));
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

        this.handleClose();
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
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
      const tooltip = <Tooltip id="modal-tooltip">
                      {this.state.registerUser ? ("Click to Login"):("Click here to register new user.")}
                      </Tooltip>;
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
            {this.state.loggedInUser ? (
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
         <Modal show={this.state.show} onHide={this.handleClose} className={this.state.registerUser ? ("modal-Container"):("")}>
         <Modal.Header>
              <Modal.Title className="text-center">
              {this.state.registerUser ? ("Please Register"):("Please Login")}
              </Modal.Title>
          </Modal.Header>
            {this.state.registerUser ? (
            <Modal.Body>
            <Input
              value={this.state.userName}
              onChange={this.handleInputChange}
              name="userName"
              placeholder="Enter User Name"
              label="User Name"
              smallname="form-text text-muted"
              smalltext="User Name"
              required="required"
            />
            <Input
              value={this.state.firstName}
              onChange={this.handleInputChange}
              name="firstName"
              placeholder="Enter Your First Name"
              label="First Name"
              smallname="form-text text-muted"
              smalltext="First Name"
              required="required"
            />
            <Input
              value={this.state.lastName}
              onChange={this.handleInputChange}
              name="lastName"
              placeholder="Enter Your Last Name"
              label="Last Name"
              smallname="form-text text-muted"
              smalltext="Last Name"
              required="required"
            />
            <Input
              value={this.state.school}
              onChange={this.handleInputChange}
              name="school"
              placeholder="Enter Your School"
              label="School"
              smallname="form-text text-muted"
              smalltext="School"
              required="required"
            />
            <Input
              value={this.state.district}
              onChange={this.handleInputChange}
              name="district"
              placeholder="Enter Your Disctrict"
              label="Disctrict"
              smallname="form-text text-muted"
              smalltext="Disctrict"
              required="required"
            />
            <Dropdown
              value={this.state.selectedCourse}
              onChange={this.handleInputChange}
              name="selectedCourse"
              smallname="form-text text-muted"
              smalltext="select a Course"
              required="required"
            >
                  {this.state.courses.map(course => (
                  <DropdownList
                  key={course}
                  value={course}>
                  </DropdownList>
                  ))}
            </Dropdown>
            <Input
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"
              placeholder="Enter Email"
              label="Email"
              pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
              smallname="form-text text-muted"
              smalltext="We'll never share your email with anyone else."
              required="required"
            />
            <Input
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              type="password"
              placeholder="Enter Password"
              label="Password"
              // pattern="[/.+@.+\..+/"
              smallname="form-text text-muted"
              smalltext="Password"
              required="required"
            />
            <Modal.Footer>
              <OverlayTrigger placement="top" overlay={tooltip}>
                <FormBtn
                bsstyle="link"
                onClick={this.handleUserLogIn}
                >
                  Login?
                </FormBtn>
              </OverlayTrigger>
              <FormBtn
                disabled={!(this.state.email && this.state.password && this.state.userName
                            && this.state.firstName && this.state.lastName && this.state.school
                            && this.state.district && this.state.selectedCourse)}
                onClick={this.handleRegisterSubmit}
                className="btn btn-primary"
                type="submit"
              >
              Submit
              </FormBtn>
              <FormBtn
                onClick={this.handleClose}
              >
              Close
              </FormBtn>
            </Modal.Footer>
            </Modal.Body>
            ) : (
            <Modal.Body>
            <Input
              value={this.state.userName}
              onChange={this.handleInputChange}
              name="userName"
              placeholder="Enter User Name"
              label="User Name"
              // pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
              smallname="form-text text-muted"
              smalltext="We'll never share your information with anyone else."
              required="required"
            />
            <Input
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              type="password"
              placeholder="Enter Password"
              label="Password"
              // pattern="[/.+@.+\..+/"
              smallname="form-text text-muted"
              smalltext="Password"
              required="required"
            />
            <Modal.Footer>
              <OverlayTrigger placement="top" overlay={tooltip}>
                <FormBtn
                bsstyle="link"
                onClick={this.handleRegister}
                >
                  Register?
                </FormBtn>
              </OverlayTrigger>
              <FormBtn
                disabled={!(this.state.userName && this.state.password)}
                onClick={this.handleSubmit}
                className="btn btn-primary"
                type="submit"
              >
              Login
              </FormBtn>
              <FormBtn
                onClick={this.handleClose}
              >
              Close
              </FormBtn>
            </Modal.Footer>
            </Modal.Body>
            )}
        </Modal>
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
