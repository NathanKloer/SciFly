import React from "react";
import "./style.css";
import { MDBContainer, MDBCard, MDBTable, MDBRow,
        MDBCol, MDBTableHead, MDBBtn, MDBTableBody
       } from "mdbreact";

// This is the container that carries the entire cart box
// export function CartList({ children }) {
  export function CartBody(props) {
  return (
    <React.Fragment>
    {props.currentId ?
    <MDBContainer className="mt-3">
      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBTable className="w-100">
                <MDBTableHead>
                  <tr>
                    <th className="align-middle">Item</th>
                    <th className="align-middle">Quantity</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                {props.cartItems.map(cartItem => {
                  return (

                    <CartItem
                              key={cartItem._id}
                              updateItem = {props.updateItem}
                              cartItemQuantity= {cartItem.productQuantity}
                              stockQuantity={cartItem.stockQuantity}
                              cartItem= {cartItem}
                              delCartItems= {props.delCartItems}></CartItem>
                  );
                })}
                </MDBTableBody>
              </MDBTable>
            </MDBCard>
              {/* <CheckOutBtn submitOrder= {props.submitOrder}></CheckOutBtn> */}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    :<div className = "hide-component"></div>}
    </React.Fragment>
  );//return
}

// This is one item in the cart
export function CartItem(props) {
  let validateQuantity = (event) => {
    //Validate Whether the Quantity is in stock
    props.updateItem(event.target.id, event.target.value);
    let quantityInputElements = document.querySelectorAll('[data-quantity-id]');
    let isQuantityAvailable = true;
    let shouldCartBeSubmitted = true;
      for(let i = 0; i<  quantityInputElements.length; i++){
        let maxValue = parseInt(quantityInputElements[i].getAttribute('max'));
        let minValue = parseInt(quantityInputElements[i].getAttribute('min'));
        let quantityId = quantityInputElements[i].getAttribute('data-quantity-id');
        let delBtnElem = document.getElementById(quantityId);
        let addButton = document.getElementById(quantityId);
        let quantityInputValue = parseInt(quantityInputElements[i].value);

        isQuantityAvailable = minValue <= quantityInputValue && maxValue >= quantityInputValue && maxValue !== 0;

        //if quantity not available stop loop
        if (!isQuantityAvailable){
          shouldCartBeSubmitted = false;
          delBtnElem.disabled = true;
          if(addButton){
            addButton.disabled = true;
          }
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
    <tr id = {'row-'+props.cartItem._id} key= {props.cartItem._id}>
      <td  className="align-middle" id={'name-'+props.cartItem._id}>{props.cartItem.product}</td>
      <td className="align-middle">
        <input className = "show-component"
              id={props.cartItem._id} type="number"
              data-quantity-id = {props.cartItem._id}
              min = "1" max = {props.stockQuantity}
              defaultValue = {props.cartItemQuantity}
              onChange = {validateQuantity}
              ></input>

      </td>
      <td className="align-middle">
        <DeleteCartItemBtn cartItem = {props.cartItem}
                          delCartItems = {props.delCartItems}>
        </DeleteCartItemBtn></td>
    </tr>
  );
}

export function DeleteCartItemBtn(props){
  return(
    <button
      color="red"
      size="sm"
      id = {props.cartItem._id}
      className=" xbtn "
      data-cart-item-id= {props.cartItem._id}
      onClick= {props.delCartItems}
      >X</button>
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
