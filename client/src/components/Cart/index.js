import React from "react";
import "./style.css";

// This is the container that carries the entire cart box
// export function CartList({ children }) {
  export function CartHdr(props) {
  return (
    // <div className="list-overflow-container">
    <div className="list-overflow-container table-responsive" id="table-div">
      <form>
        <table className="w-20 table table-bordered table-contents">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>  </th>
            </tr>
          </thead>
          <tbody>
          {/* <h1>Length = {props.orders.length}</h1> */}
            {props.cartItems.map(cartItem => {
              return (
                <CartItem key={cartItem.id} cartItem= {cartItem} delCartItems= {props.delCartItems}></CartItem>
              );
            })}
          </tbody>
        </table>
        <CheckOutBtn submitOrder= {props.submitOrder}></CheckOutBtn>
      </form>
    </div>
  );
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
      <td  id={'name-'+props.cartItem.id}>{props.cartItem.name}Test</td>
      <td><input id={'quantity-'+props.cartItem.id} type="number" data-quantity-id = {props.cartItem.id} defaultValue="1" min = "1" max = {props.cartItem.stockQuantity} onChange = {validateQuantity}/></td>
      <td><DelInvBtn cartItem = {props.cartItem} delCartItems = {props.delCartItems}></DelInvBtn></td>
    </tr>
  );
}

export function DelInvBtn(props){
  return(
    <button type="button" id = {"delete-btn-"+props.cartItem.id} className="btn custom-view-btn ml-1" data-cart-item-id= {props.cartItem.id} onClick= {props.delCartItems}>
    ✗
    </button>
  );
}

// This is the checkout button
export function CheckOutBtn(props) {
  return (
    <button type="submit" id = "checkout-btn" className="btn custom-view-btn ml-1" onClick= {props.submitOrder}>
      Submit
    </button>
  );
}
