import React from "react";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Input, FormBtn, Dropdown, DropdownList } from "../LogIn";
// import "./style.css";

export function ModalComponent(props) {


    const tooltip = <Tooltip id="modal-tooltip">
                    {props.state.registerUser ? ("Click to Login"):("Click here to register new user.")}
                    </Tooltip>;
    return (
<Modal show={props.state.show} onHide={props.handleClose} className={props.state.registerUser ? ("modal-Container"):("")}>
<Modal.Header>
     <Modal.Title className="text-center">
     {props.state.registerUser ? ("Please Register"):("Please Login")}
     {props.state.loginError && !props.state.registerUser ? (<p className="text-danger">Incorrect Username or Password!</p>):("")}
     {props.state.registerError && props.state.registerUser ? (<p className="text-danger">Username already in used. Please try again.</p>):("")}
     {props.state.invalidEmail && props.state.registerUser ? (<p className="text-danger">Invalid Email. Please try again.</p>):("")}
     </Modal.Title>
 </Modal.Header>
   {props.state.registerUser ? (
   <Modal.Body>
   <Input
     value={props.state.userName}
     onChange={props.handleInputChange}
     name="userName"
     placeholder="Enter User Name"
     label="User Name"
     smallname="form-text text-muted"
     smalltext="User Name"
     required="required"
   />
   <Input
     value={props.state.firstName}
     onChange={props.handleInputChange}
     name="firstName"
     placeholder="Enter Your First Name"
     label="First Name"
     smallname="form-text text-muted"
     smalltext="First Name"
     required="required"
   />
   <Input
     value={props.state.lastName}
     onChange={props.handleInputChange}
     name="lastName"
     placeholder="Enter Your Last Name"
     label="Last Name"
     smallname="form-text text-muted"
     smalltext="Last Name"
     required="required"
   />
   <Input
     value={props.state.school}
     onChange={props.handleInputChange}
     name="school"
     placeholder="Enter Your School"
     label="School"
     smallname="form-text text-muted"
     smalltext="School"
     required="required"
   />
   <Input
     value={props.state.district}
     onChange={props.handleInputChange}
     name="district"
     placeholder="Enter Your Disctrict"
     label="Disctrict"
     smallname="form-text text-muted"
     smalltext="Disctrict"
     required="required"
   />
   <Dropdown
     value={props.state.selectedCourse}
     onChange={props.handleInputChange}
     name="selectedCourse"
     smallname="form-text text-muted"
     smalltext="select a Course"
     required="required"
   >
         {props.state.courses.map(course => (
         <DropdownList
         key={course}
         value={course}>
         </DropdownList>
         ))}
   </Dropdown>
   <Input
     value={props.state.email}
     onChange={props.handleInputChange}
     name="email"
     type="email"
     placeholder="Enter Email"
     label="Email"
     pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
     smallname="form-text text-muted"
     smalltext="We'll never share your email with anyone else."
     required="required"
     className={props.state.invalidEmail ? ("form-control error"):("form-control")}
   />
   <Input
     value={props.state.password}
     onChange={props.handleInputChange}
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
       onClick={props.handleUserLogIn}
       >
         Login?
       </FormBtn>
     </OverlayTrigger>
     <FormBtn
       disabled={!(props.state.email && props.state.password && props.state.userName
                   && props.state.firstName && props.state.lastName && props.state.school
                   && props.state.district && props.state.selectedCourse)}
       onClick={props.handleRegisterSubmit}
       className="btn btn-primary"
       type="submit"
     >
     Submit
     </FormBtn>
     <FormBtn
       onClick={props.handleClose}
     >
     Close
     </FormBtn>
   </Modal.Footer>
   </Modal.Body>
   ) : (
   <Modal.Body>
   <Input
     value={props.state.userName}
     onChange={props.handleInputChange}
     name="userName"
     placeholder="Enter User Name"
     label="User Name"
     // pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
     smallname="form-text text-muted"
     smalltext="We'll never share your information with anyone else."
     required="required"
   />
   <Input
     value={props.state.password}
     onChange={props.handleInputChange}
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
       onClick={props.handleRegister}
       >
         Register?
       </FormBtn>
     </OverlayTrigger>
     <FormBtn
       disabled={!(props.state.userName && props.state.password)}
       onClick={props.handleSubmit}
       className="btn btn-primary"
       type="submit"
     >
     Login
     </FormBtn>
     <FormBtn
       onClick={props.handleClose}
     >
     Close
     </FormBtn>
   </Modal.Footer>
   </Modal.Body>
   )}
</Modal>
    )};

  export default ModalComponent;
