import React from "react";
// import "./style.css";

export function InvTblHdr(props) {
  return (
    <div className="table-responsive" id="table-div">
      <table className="w-25 table table-bordered table-contents">
        <thead>
          <tr>
            <th>Item</th>
            <th>Category</th>
            <th>Description</th>
            <th>UOM</th>
            <th>Quantity</th>
            {props.currentId?<th>Add to Cart</th>:<th className = "hide-component"></th>}
          </tr>
        </thead>
        <tbody>
          {props.products.map(product => {
            return (
              <InvTblItem key= {product._id} currentId = {props.currentId} product= {product} listener = {props.addCartItems} disableAddBtn = {props.disableAddBtn}></InvTblItem>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function InvTblItem(props){
  return(
    <tr >
      <td  id={'name-'+props.product._id}>{props.product.productName}</td>
      <td>{props.product.category}</td>
      <td>{props.product.description}</td>
      <td>{props.product.uom}</td>
      <td id={'prod-stock-quantity-'+props.product._id}>{props.product.stockQuantity}</td>
      {props.currentId?<td><AddInvBtn product = {props.product} listener = {props.listener} disabled = {props.disableAddBtn(props.product.stockQuantity)}></AddInvBtn></td>:<td className = "hide-component"></td>}
    </tr>
  );
}

export function AddInvBtn(props){
  return(
    <button type="button" id = {props.product._id} className="btn custom-view-btn ml-1" onClick={props.listener} data-product-id= {props.product._id} tabIndex="0" key= {props.product._id+'btn'} disabled = {props.disabled}>
      Add
    </button>
  );
}

// export default InventoryTblHdr;
