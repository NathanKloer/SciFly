import React from "react";

function OrganizationSearchList(props) {

  return (
    <div className="container-fluid margin-left">
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

export default OrganizationSearchList;
