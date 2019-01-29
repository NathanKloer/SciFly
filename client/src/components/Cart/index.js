import React from "react";
import "./style.css";

// This is the container that carries the entire cart box
export function CartList({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

// This is one item in the cart
export function CartItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

// This is the quantity purchased input
export function QtyInput(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

// This is the checkout button
export function CheckoutBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

// This is the Delete Button next to each cart line item
export function DeleteCartItem(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}
