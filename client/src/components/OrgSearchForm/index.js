import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";

function OrgSearchForm(props) {

  return (
    <div className="container">
      <div className="row">
        <form>
          <select id="ddlOrgList" onChange={props.orgSearchEvent} required>
            <option value="" hidden>Select an Organization</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default OrgSearchForm;
