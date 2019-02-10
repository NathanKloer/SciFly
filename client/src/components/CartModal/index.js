import React from "react";
import { MDBBtn, MDBModal, MDBModalHeader, MDBIcon, MDBModalBody,
        MDBModalFooter
        } from "mdbreact";
import {CartBody} from "../CartBody";

export function CartModal (props) {

    return (
      <MDBModal size="lg" backdrop={true} isOpen={props.sideModal} toggle={props.toggleCart} fullHeight position="top">
      <MDBModalHeader toggle={props.toggleCart}>
          <MDBIcon icon="shopping-cart"> Shopping Cart</MDBIcon>
      </MDBModalHeader>
      <MDBModalBody  >
        <CartBody
          updateItem={props.updateItem}
          cartItems={props.cartItems}
          currentId={props.currentId}
          delCartItems={props.delCartItems}
        />
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn
          color="secondary"
          onClick={props.toggleCart}
          >Close
        </MDBBtn>
        <MDBBtn
          color="primary"
          id="checkout-btn"
          disabled = {props.cartItems.length === 0 ? (true):(false)}
          onClick={props.submitOrder}
          >Submit
          </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
    )}
// }
