import React from "react";
import "./style.css";
import { MDBContainer, MDBRow, MDBCol, MDBMask, MDBBtn } from "mdbreact";

// This is the container that carries the entire cart box
// export function CartList({ children }) {
  export function CartBody(props) {
  return (
    // <div className="list-overflow-container">
    <React.Fragment>
    {props.currentId?<div className="list-overflow-container table-responsive cart-border" id="table-div">
      <MDBRow>
      <form>
        <table className="w-20 table table-striped table-contents">
          <thead>
            <tr>
              <MDBCol sm="1" />
              <MDBCol md="4">Item</MDBCol>
              <MDBCol xs="3">Quantity</MDBCol>
              <th>  </th>
            </tr>
          </thead>
          <MDBCol xs="12">
          <tbody>
          {/* <h1>Length = {props.orders.length}</h1> */}
            {props.cartItems.map(cartItem => {
              return (
                <CartItem key={cartItem.id} cartItem= {cartItem} delCartItems= {props.delCartItems}></CartItem>
              );
            })}
          </tbody>
          <CheckOutBtn submitOrder= {props.submitOrder}></CheckOutBtn>
          </MDBCol>
        </table>
      </form>
      </MDBRow>
    </div>:<div className = "hide-component"></div>}
    </React.Fragment>
  );//return
}

// This is one item in the cart
export function CartItem(props) {
  let validateQuantity = () => {
    //Validate Whether the Quantity is in stock
    let quantityInputElements = document.querySelectorAll('[data-quantity-id]');
    // console.log("Length"+quantityInputElements.length);
    let isQuantityAvailable = true;
    let shouldCartBeSubmitted = true;
      for(let i = 0; i<  quantityInputElements.length; i++){
        let maxValue = parseInt(quantityInputElements[i].getAttribute('max'));
        let minValue = parseInt(quantityInputElements[i].getAttribute('min'));
        let quantityId = quantityInputElements[i].getAttribute('data-quantity-id');
        let delBtnElem = document.getElementById('delete-btn-'+quantityId);
        let addButton = document.getElementById(quantityId);
        let quantityInputValue = parseInt(quantityInputElements[i].value);

        isQuantityAvailable = minValue <= quantityInputValue && maxValue >= quantityInputValue && maxValue !== 0;
        // console.log("QUANTITY = ", isQuantityAvailable);
        // console.log("minValue = ", minValue, "QUANTITY = ", quantityInputValue, "maxValue = ", maxValue, "Available = ", isQuantityAvailable);

        //if quantity not available stop loop
        if (!isQuantityAvailable){
          shouldCartBeSubmitted = false;
          delBtnElem.disabled = true;
          addButton.disabled = true;
          quantityInputElements[i].style.color = 'red';
        }
        else{
          delBtnElem.disabled = false;
          quantityInputElements[i].style.color = '';
        }
      }//for

      if(shouldCartBeSubmitted)
      {
        document.getElementById("checkout-btn").disabled = false;
        //console.log("Completed Order", jsonOrder);
      }
      else
      {
        document.getElementById("checkout-btn").disabled = true;
      }
  }
  return (
    <tr id = {'row-'+props.cartItem.id} key= {props.cartItem.id}>
    <MDBRow>
    <MDBCol xs="7" sm="6">
      <td  id={'name-'+props.cartItem.id}>{props.cartItem.name}</td> </MDBCol>
    <MDBCol xs="4">
      <td><input className = "show-component" id={'quantity-'+props.cartItem.id} type="number" data-quantity-id = {props.cartItem.id} defaultValue="1" min = "1" max = {props.cartItem.stockQuantity} onChange = {validateQuantity}/></td></MDBCol>
    <MDBCol xs="1">
      <td><DeleteCartItemBtn cartItem = {props.cartItem} delCartItems = {props.delCartItems}></DeleteCartItemBtn></td></MDBCol>
    </MDBRow>
    </tr>
  );
}

export function DeleteCartItemBtn(props){
  return(
    <MDBBtn type="button" id = {"delete-btn-"+props.cartItem.id} className="btn xbtn btn-danger ml-1" data-cart-item-id= {props.cartItem.id} onClick= {props.delCartItems}>
    ✗
    </MDBBtn>
  );
}

// This is the checkout button
export function CheckOutBtn(props) {
  return (
    <MDBBtn type="submit" id = "checkout-btn" className="btn btn-success fas fa-shopping-cart" onClick= {props.submitOrder}>
     <span>  Submit</span>
    </MDBBtn>
  );
}
