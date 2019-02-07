import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";

function CatSearchForm(props) {
  return (
    <div className="container">
      <div className="row">
        <form>
          <select id="ddlCatList" onChange={props.catSearchEvent}>
          <option value="" hidden>Select a Category</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default CatSearchForm;
