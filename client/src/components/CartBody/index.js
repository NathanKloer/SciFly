import React, { Component } from "react";
import Touchable from "rc-touchable";
import "./style.css";
import { MDBContainer, MDBCard, MDBTable, MDBRow,
        MDBCol, MDBTableHead, MDBBtn, MDBTableBody,
        MDBTooltip} from "mdbreact";

// This is the container that carries the entire cart box
// export function CartList({ children }) {
  export function CartBody(props) {
  return (
    <React.Fragment>
    {props.currentId ?
    <MDBContainer className="mt-3">
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <MDBTable responsive className="w-100">
                <MDBTableHead>
                  <tr >
                    <th className="align-middle w-75">Item</th>
                    <th className="align-middle w-50">Description</th>
                    <MDBTooltip
                      placement="top"
                      tag="th"
                      className="align-middle text-center w-50"
                      tooltipContent="Unit of Measure">
                      UOM
                    </MDBTooltip>
                    <th className="align-middle text-center w-25">Quantity</th>
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
                              delCartItems= {props.delCartItems}>
                              </CartItem>
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
class CartItem extends Component {
componentDidUpdate() {
  this.validateQuantity();
}
validateQuantity = (event) => {
    //Validate Whether the Quantity is in stock
    if(event){
     this.props.updateItem(event.target.id, event.target.value);
    }
    let quantityInputElements = document.querySelectorAll('[data-quantity-id]');
    let isQuantityAvailable = true;
    let shouldCartBeSubmitted = true;
      for(let i = 0; i<  quantityInputElements.length; i++){
        let maxValue = parseInt(quantityInputElements[i].getAttribute('max'));
        let minValue = parseInt(quantityInputElements[i].getAttribute('min'));
        let quantityInputValue = parseInt(quantityInputElements[i].value);
        isQuantityAvailable = minValue <= quantityInputValue && maxValue >= quantityInputValue && maxValue !== 0;

        // if quantity not available stop loop
        if (!isQuantityAvailable){
          shouldCartBeSubmitted = false;
          quantityInputElements[i].style.color = 'red';
        }
        else{
          if(event){
          quantityInputElements[i].style.color = '';
          }
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
    render(){
  return (
    <tr id = {'row-' + this.props.cartItem._id}
        key= {this.props.cartItem._id}>
      <td  className="align-middle w-75"
          id={'name-'+ this.props.cartItem._id}>
          {this.props.cartItem.product}
      </td>
      <td
          className="align-middle w-50 ">
          {this.props.cartItem.description}
      </td>
      <td
          className="align-middle text-center w-25">
          {this.props.cartItem.uom}
      </td>
      <td className="align-middle  text-center">
        <input className = "show-component text-center w-75"
              id={this.props.cartItem._id} type="number"
              data-quantity-id = {this.props.cartItem._id}
              min = "1" max = {this.props.stockQuantity}
              defaultValue = {this.props.cartItemQuantity}
              onChange = {this.validateQuantity}
              >
        </input>
      </td>
      <td className="align-middle">
        <DeleteCartItemBtn  cartItem = {this.props.cartItem}
                            delCartItems = {this.props.delCartItems}>
        </DeleteCartItemBtn></td>
    </tr>
  );
}
}
export function DeleteCartItemBtn(props){
  return(
    <MDBTooltip
                placement="top"
                tag="button"
                color="red"
                size="sm"
                id = {props.cartItem._id}
                className=" xbtn "
                data-cart-item-id= {props.cartItem._id}
                onClick= {props.delCartItems}
                tooltipContent=" Remove Item">
      <Touchable  onPress={props.submitOrder}>
          <span
                id = {props.cartItem._id}
                className=" xbtn "
                data-cart-item-id= {props.cartItem._id}
                onClick= {props.delCartItems}>
                X
          </span>
      </Touchable>
    </MDBTooltip>
  );
}

// This is the checkout button
export function CheckOutBtn(props) {
  return (
    <Touchable onPress={props.submitOrder}>
      <MDBBtn type="submit"
              id = "checkout-btn"
              className="btn btn-success fas fa-shopping-cart"
            >
      <span>  Submit</span>
      </MDBBtn>
    </Touchable>
  );
}
