import React, { Component } from "react";
import "./style.css";
import {Modal, Button,OverlayTrigger, Tooltip,
        FormGroup, ControlLabel, FormControl} from "react-bootstrap";

class Register extends Component {


    render() {
      const tooltip = <Tooltip id="modal-tooltip">
                      Click here for user login.
                      </Tooltip>;
      return (
        <div>
            <Modal.Header>
              <Modal.Title>Please Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                <div className="form-group">
                  <label>User Name</label>
                  <input type="email" className="form-control" id="inputUserName" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <small id="userNameHelp" className="form-text text-muted">UserName</small>
                </div>
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" className="form-control" id="inputFirstName" aria-describedby="firstName" placeholder="First Name"/>
                  <small id="firstName" className="form-text text-muted">First Name</small>
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" className="form-control" id="inputLastName" aria-describedby="lastName" placeholder="Last Name"/>
                  <small id="lastName" className="form-text text-muted">Last Name</small>
                </div>
                <div className="form-group">
                  <label>School</label>
                  <input type="text" className="form-control" id="inputSchool" aria-describedby="School" placeholder="School"/>
                  <small id="School" className="form-text text-muted">School</small>
                </div>
                <div className="form-group">
                  <label>District</label>
                  <input type="text" className="form-control" id="inputDistrict" aria-describedby="District" placeholder="District"/>
                  <small id="District" className="form-text text-muted">District</small>
                </div>
                <FormGroup id="formControlsSelect">
                <ControlLabel>Select</ControlLabel>
                <FormControl componentClass="select" placeholder="select" id="inputClass">
                  <option value="select">select</option>
                  <option value="Biotechnology">Biotechnology</option>
                  <option value="Biology">Biology</option>
                  <option value="Honors Biology">Honors Biology</option>
                  <option value="AP Biology">AP Biology</option>
                  <option value="Life Sciences(middle grades)">Life Sciences(middle grades)</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="other">...</option>
                </FormControl>
              </FormGroup>
                <div className="form-group">
                  <label>Email address</label>
                  <input pattern="[/.+@.+\..+/" required type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                </div>
            </form>
            </Modal.Body>
            <Modal.Footer>
              <OverlayTrigger placement="top" overlay={tooltip}>
                <Button bsStyle="link" onClick={this.props.handleUserLogIn}>Already a User?</Button>
              </OverlayTrigger>
              <Button onClick={this.props.handleRegisterSubmit} type="submit" className="btn btn-primary">Submit</Button>
              <Button onClick={this.props.handleClose}>Close</Button>
            </Modal.Footer>
        </div>
      );
    }
  }

  export default Register;
