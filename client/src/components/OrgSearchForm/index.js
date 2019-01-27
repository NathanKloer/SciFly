import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";

function OrgSearchForm() {
  return (
    <div className="container">
      <div className="row">
        <form>
          <select id="ddlList">
            <option value="1">GeorgiaBio</option>
          </select>
          <button type="button" className="btn custom-view-btn ml-1" tabIndex="0">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrgSearchForm;
