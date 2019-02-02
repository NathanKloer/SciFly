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
                // listener = {props.createOrderArr}
                <CartItem key={cartItem.id} cartItem= {cartItem} delCartItems= {props.delCartItems}></CartItem>
              );
            })}
          </tbody>
        </table>
        <CheckOutBtn submitOrder= {props.submitOrder}></CheckOutBtn>
      </form>

      {/* <ul className="list-group">{children}</ul> */}
    </div>
  );
}

// This is one item in the cart
export function CartItem(props) {
  return (
    <tr id = {'row-'+props.cartItem.id} key= {props.cartItem.id}>
      <td  id={'name-'+props.cartItem.id}>{props.cartItem.name}Test</td>
      <td><input id={'quantity-'+props.cartItem.id} type="number" defaultValue="1"/></td>
      <td><DelInvBtn cartItem = {props.cartItem} delCartItems = {props.delCartItems}></DelInvBtn></td>
    </tr>
  );
}


// This is the quantity purchased input
// export function QtyInput(props) {
//   return (
//     <div className="form-group">
//       <input className="form-control" {...props} />
//     </div>
//   );
// }

export function DelInvBtn(props){
  {/*props.listener*/}
  return(
    <button type="button" className="btn custom-view-btn ml-1" data-cart-item-id= {props.cartItem.id} onClick= {props.delCartItems}>
    ✗
    </button>
  );
}

// This is the checkout button
export function CheckOutBtn(props) {
  return (
    // <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
    //   {props.children}
    // </button>
    <button type="submit" className="btn custom-view-btn ml-1" onClick= {props.submitOrder}>
    Submit
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
