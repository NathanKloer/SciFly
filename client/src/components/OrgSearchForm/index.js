import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";

function OrgSearchForm(props) {
  return (
    <div className="container">
      <div className="row">
        <form>
          <select id="ddlOrgList">
            <option value="1">GeorgiaBio</option>
          </select>
          <button type="button" className="btn custom-view-btn ml-1" onClick={props.orgSearchEvent} tabIndex="0">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrgSearchForm;
