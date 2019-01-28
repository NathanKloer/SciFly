import React from "react";
import {Modal} from "react-bootstrap";
import LoginModal from "./Login";
import RegisterModal from "./Register";


function Login(props){

      return (
        <div>
          <Modal show={props.show} onHide={props.handleClose} className={props.registerUser ? ("modal-Container"):("")}>
            {props.registerUser ? (
            <RegisterModal
            handleClose={props.handleClose}
            handleRegister={props.handleRegister}
            handleRegisterSubmit={props.handleRegisterSubmit}
            handleUserLogIn={props.handleUserLogIn}/>
            ) : (
            <LoginModal
            handleClose={props.handleClose}
            handleSubmit={props.handleSubmit}
            handleRegister={props.handleRegister}/>
            )}
          </Modal>
        </div>
      );
    }

  export default Login;
