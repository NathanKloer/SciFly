import React, { Component } from "react";
import {Modal, Button,OverlayTrigger, Tooltip} from "react-bootstrap";
import "./style.css";

class LoginModal extends Component {

    render(props) {
      const tooltip = <Tooltip id="modal-tooltip">
                      Click here to register new user.
                      </Tooltip>;
      return (
        <div>
            <Modal.Header>
            <Modal.Title>Please Enter Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
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
              <Button bsStyle="link" onClick={this.props.handleRegister}>Register?</Button>
            </OverlayTrigger>
              <Button onClick={this.props.handleSubmit} type="submit" className="btn btn-primary">Submit</Button>
              <Button onClick={this.props.handleClose}>Close</Button>
            </Modal.Footer>
        </div>
      );
    }
  }
  export default LoginModal;

