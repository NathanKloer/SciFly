import React from "react";

function OrgSearchForm(props) {

  return (
    <div className="container">
      <div className="row">
        <form>
          <select id="ddlOrgList" className="browser-default custom-select" onChange={props.orgSearchEvent} required>
            <option>Select an Organization</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default OrgSearchForm;
