import React from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard,
         MDBTable, MDBTableBody, MDBTableHead
        } from "mdbreact";
import "./style.css";

export function InventoryTableBody(props) {
  return (
    <MDBContainer className="mt-3">
      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBTable striped>
              {/* <MDBTableHead color="default-color"> */}
              <MDBTableHead>
                <tr>
                  <th>Item</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>UOM</th>
                  <th>Quantity</th>
                {props.currentId ? <th></th> :
                    <th className="hide-component"></th>}
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {props.products.map(product => {
                  return (
                    <InventoryTableItem
                                        key={product._id}
                                        currentId={props.currentId}
                                        product={product}
                                        listener={props.addCartItems}
                                        disableAddBtn={props.disableAddBtn}
                                        />
                  );
                })}
              </MDBTableBody>
            </MDBTable>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export function InventoryTableItem(props){
  return(
    <tr id="invtable">
      <td className="align-middle" id={'name-'+props.product._id}>{props.product.productName}</td>
      <td className="align-middle">{props.product.category}</td>
      <td className="align-middle">{props.product.description}</td>
      <td className="align-middle">{props.product.uom}</td>
      <td className="align-middle" id={'prod-stock-quantity-'+props.product._id}>{props.product.stockQuantity}</td>
      {props.currentId?<td><AddInventoryBtn product = {props.product} listener = {props.listener} disabled = {props.disableAddBtn(props.product.stockQuantity)}></AddInventoryBtn></td>:<td className = "hide-component"></td>}
    </tr>
  );
}

export function AddInventoryBtn(props){
  return(
    <MDBBtn
            id={props.product._id}
            className="addButton black-text"
            onClick={props.listener}
            data-product-id = {props.product._id}
            key= {props.product._id+"btn"}
            disabled = {props.disabled}
            color= "#1de9b6 teal accent-3"
            size="sm"
            >
      Add
    </MDBBtn>
  );
}
