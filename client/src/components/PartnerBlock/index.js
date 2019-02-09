import React from "react";
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBMask, MDBBtn, MDBIcon } from "mdbreact";
// import { Link } from "react-router-dom";
import "./style.css";
function PartnerBlock() {
  return (
      <MDBCard className="my-5 px-5 pb-5 main-donate">
        <MDBCardBody>
          <MDBRow className="row pageheader">
            <MDBCol lg="5">
              <h5>Our Charity Partners</h5>
            </MDBCol>
            <MDBCol lg="7">
              <h3>This digital inventory is made possible by the following charities.<br /> If you wish to make a donation,
                  we ask you do so through their donation services.
                     </h3>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <hr id="hr" />
            <MDBCol lg="3" xl="2">
              <img className="img-fluid icon" src={window.location.origin + "/img/gabioinst.png"} alt="" />
            </MDBCol>
            <MDBCol lg="9" xl="10">
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Georgia BioEd Institute</strong>
              </h3>
              <p className="dark-grey-text">
                Our first charity parter, and for whom Parts-to-Purpose was originally designed, Georgia BioEd Institute brings educational science supplies from the shelf to the classNameroom. We are proud to work with GA BioEd Institute to bring educators across Georgia a way to easily and quickly find specific tools or supplies that are needed for their classroom. Here is something about them in their own words:
          <br /><br />
                The Georgia BioEd Institute is a division of Georgia Bio, a 501(c)(3) nonprofit organization serving the state’s life science industry. The Institute’s mission is to strengthen Georgia’s life sciences workforce pipeline through classNameroom-to-career initiatives that align with industry needs. We are building the capacity of Georgia classrooms to support the future life science workforce with teacher professional development in biotechnology, an equipment depot, a visiting scientist program, and the BioGENEius award for student biotechnology projects. The Institute provides training for current workforce needs (e.g., biotech courses for nonscientists and executive leadership training for future managers), and supports networking and mentoring for early career professionals through the Emerging Leaders Network.
          </p>
              <h3 className="font-weight-bold mb-3 p-0">
                <MDBBtn id="button" type="button" className="btn btn-primary btn-rounded btn-sm" href="http://www.georgiabioed.org/education/equipment-depot/">Donate</MDBBtn></h3>
            </MDBCol>
          </MDBRow>
          <hr id="hr" />
          <MDBRow>
            <MDBCol lg="3" xl="2">
              <img className="icon" src={window.location.origin + "/img/p2p.png"} alt="" />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBCol>
            <MDBCol lg="9" xl="10">
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Parts-to-Purpose</strong>
              </h3>
              <p id="sample-text" className="dark-grey-text font-weight-bold">

                This is our example charity partner space. Here we will present a small about if information about our various partners and links to their site if users are interested in donating or contacting them for their own requests.
          </p>
              <p>
                <br /><br />
                <MDBIcon icon="quote-left" />  Many small nonprofits receive item donations from donors and distribute those items to people in need.  A lot of these nonprofits operate on a shoestring budget and use basic tools such as Microsoft Excel, Word, and Outlook to manage their inventory, interact with donors, and distribute donations to donees. Their inventory, donees, and donor management are at times kept on multiple documents in different locations and managed by various volunteers which makes it difficult to update, maintain, access, and scale.
          <br /><br />
                Our goal is to provide an IT solution that would make the process easier for small nonprofits to manage their donations so that they can spend more time working on their cause -- making a difference.  Our app is called Parts-to-Purpose.  It is a simple inventory and people management platform for nonprofits that will allow them to:
          <br /><br />
                <ul>
                  <li>Update, manage, and track their inventory of donations</li>
                  <li>Collect donor and donee information</li>
                  <li>Provide donees a portal to login, view and select items needed, add to a cart, and arrange for pickup/shipment of their cart</li>
                  <li>See changes in inventory/stock in near real-time</li>
                  <li>Collect and visualize metrics to identify needs and trends so that they can use those metrics to focus donation efforts or community marketing</li>
                </ul>
                <br />
                The value of our application is that it will be an open-source, inexpensive, and simple inventory solution that nonprofits can use to immediately connect the “purpose” in need to the “part” that’s needed. <MDBIcon icon="quote-right" />
              </p>
              <h3 className="font-weight-bold mb-3 p-0">
                <MDBBtn id="button" type="button" className="btn btn-primary btn-rounded btn-sm" href="http://www.georgiabioed.org/education/equipment-depot/">Donate</MDBBtn></h3>
            </MDBCol>
          </MDBRow>
          <hr id="hr" />
        </MDBCardBody>
      </MDBCard>
  );
}

export default PartnerBlock
