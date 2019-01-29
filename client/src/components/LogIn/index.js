import React from "react";
import { Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import "./style.css";

export function Input(props) {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input className="form-control" {...props} />
      <small className={props.smallname}>{props.smalltext}</small>
    </div>
  );
}
export function FormBtn(props) {
  return (
          <Button bsStyle={props.bsstyle} {...props} >{props.children}</Button>
          );
}
export function Dropdown(props) {
  return (
        <FormGroup  id="formControlsSelect">
        <ControlLabel>Select</ControlLabel>
        <FormControl componentClass="select" {...props}>
          <option >Select</option>
            {props.children}
        </FormControl>
        <small className={props.smallname}>{props.smalltext}</small>
      </FormGroup>
          );
}
export function DropdownList(props) {
  return (
          <option {...props}>{props.value}</option>
          );
}


