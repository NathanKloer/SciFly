import React from "react";
import { MDBBtn, MDBModal, MDBModalHeader, MDBIcon, MDBModalBody,
        MDBModalFooter
        } from "mdbreact";
import Touchable from "rc-touchable";
import {CartBody} from "../CartBody";
import "../../style.css";

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
      <Touchable onPress={props.toggleCart}>
        <MDBBtn
                color="primary"
                id="close-btn"
                >Close
        </MDBBtn>
      </Touchable>
      <Touchable onPress={props.submitOrder}>
        <MDBBtn
                color="primary"
                id="checkout-btn"
                disabled = {props.cartItems.length === 0 ? (true):(false)}
                >Submit
        </MDBBtn>
      </Touchable>
      </MDBModalFooter>
    </MDBModal>
    )}
