import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";

function CatSearchForm(props) {
  return (
    <div className="container">
      <div className="row">
        <form>
          <select id="ddlCatList" onChange={props.catSearchEvent}>
            <option value="1">Culturing</option>
            <option value="2">Dryer</option>
            <option value="3">Electrophoresis</option>
            <option value="4">Filters</option>
            <option value="5">Immunoassays</option>
            <option value="6">Miscellaneous</option>
            <option value="7">Pipettes</option>
            <option value="8">PPE</option>
            <option value="9">Protein Assays</option>
            <option value="10">Storage</option>
            <option value="10">Syringes</option>
            <option value="12">UV-Vis</option>
          </select>
          <button type="button" className="btn custom-view-btn ml-1" onClick={props.catSearchEvent} tabIndex="0">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default CatSearchForm;
