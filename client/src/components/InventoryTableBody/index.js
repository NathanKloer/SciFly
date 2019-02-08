import React from "react";
import { MDBBtn } from "mdbreact";
import "./style.css";

export function InventoryTableBody(props) {
  return (
    <div className="table-responsive" id="table-div">
      <table className="w-25 table table-striped">
        <thead>
          <tr>
            <th>Item</th>
            <th>Category</th>
            <th>Description</th>
            <th>UOM</th>
            <th>Quantity</th>
            {props.currentId?<th> </th>:<th className = "hide-component"></th>}
          </tr>
        </thead>
        <tbody>
          {props.products.map(product => {
            return (
              <InventoryTableItem key= {product._id} currentId = {props.currentId} product= {product} listener = {props.addCartItems} disableAddBtn = {props.disableAddBtn}></InventoryTableItem>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function InventoryTableItem(props){
  return(
    <tr id="invtable" >
      <td  id={'name-'+props.product._id}>{props.product.productName}</td>
      <td>{props.product.category}</td>
      <td>{props.product.description}</td>
      <td>{props.product.uom}</td>
      <td id={'prod-stock-quantity-'+props.product._id}>{props.product.stockQuantity}</td>
      {props.currentId?<td><AddInventoryBtn product = {props.product} listener = {props.listener} disabled = {props.disableAddBtn(props.product.stockQuantity)}></AddInventoryBtn></td>:<td className = "hide-component"></td>}
    </tr>
  );
}

export function AddInventoryBtn(props){
  return(
    <MDBBtn type="button" id={props.product._id} className="addbutton btn-primary" onClick={props.listener} data-product-id= {props.product._id} tabIndex="0" key= {props.product._id+'btn'} disabled = {props.disabled}>
      Add
    </MDBBtn>
  );
}
