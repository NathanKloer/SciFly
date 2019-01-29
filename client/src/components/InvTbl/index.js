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
            <th>Add to Cart</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map(product => {
            return (
              <InvTblItem product= {product}></InvTblItem>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function InvTblItem(props){
  return(
    <tr key= {props.product._id}>
      <td  id={'name-'+props.product._id}>{props.product.productName}</td>
      <td>{props.product.category}</td>
      <td>{props.product.description}</td>
      <td>{props.product.uom}</td>
      <td>{props.product.stockQuantity}</td>
      <td><AddInvBtn product = {props.product}></AddInvBtn></td>
    </tr>
  );
}

export function AddInvBtn(props){
  return(
    <button type="button" className="btn custom-view-btn ml-1" data-productid= {props.product._id} tabIndex="0" key= {props.product._id+'btn'}>
      Add
    </button>
  );
}

// export default InventoryTblHdr;
