import React from "react";
import { Grid } from "react-bootstrap";
import { Container, Row, Col } from "../Grid/index";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
// import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";
function PartnerBlock() {
    return (
    <MDBCard className="my-5 px-5 pb-5 main">
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
          <hr id="hr"/>
        <MDBCol lg="3" xl="2">
          <img className="img-fluid icon" src={window.location.origin + "/img/gabioinst.png"} alt=""/>
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
          <MDBBtn color="primary" size="md">
            Visit their Site!
          </MDBBtn>
        </MDBCol>
      </MDBRow>
      <hr id="hr"/>
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
          <p className="dark-grey-text">
          This is our example charity partner space. Here we will present a small about if information about our various partners and links to their site if users are interested in donating or contacting them for their own requests.
          <br /><br />
          Lorem ipsum dolor sit amet, fugit sententiae adversarium vim te, mea nusquam tincidunt ei. Vidit salutatus mea ea. Te vis errem suscipit, eum eu nonumy utamur mediocritatem. Erant dicam mollis sea ea, at has meliore dolores, est id alii posidonium. Probo ipsum sanctus cum ex. Sea cu fabulas oportere. Duo at persecuti moderatius efficiendi, modo tempor menandri ius ad. Laudem soleat albucius et usu. Sed ea utroque tibique mediocritatem. Sed modo dico molestie ne. In nam perpetua gubergren comprehensam, ad oportere splendide disputando vix. Id cum ludus detracto, in nulla aeque vix. An cum viderer integre voluptatibus, ludus tibique per et. Sit ne legimus mentitum placerat. Eos te sint commodo interpretaris, quod percipit evertitur eam in, alterum principes eu his. At eam elit noluisse, augue dicit offendit eum cu.Lorem ipsum dolor sit amet, fugit sententiae adversarium vim te, mea nusquam tincidunt ei. Vidit salutatus mea ea. Te vis errem suscipit, eum eu nonumy utamur mediocritatem. Erant dicam mollis sea ea, at has meliore dolores, est id alii posidonium. Probo ipsum sanctus cum ex. Sea cu fabulas oportere. Duo at persecuti moderatius efficiendi, modo tempor menandri ius ad. Laudem soleat albucius et usu. Sed ea utroque tibique mediocritatem. Sed modo dico molestie ne. In nam perpetua gubergren comprehensam, ad oportere splendide disputando vix. Id cum ludus detracto, in nulla aeque vix. An cum viderer integre voluptatibus, ludus tibique per et. Sit ne legimus mentitum placerat. Eos te sint commodo interpretaris, quod percipit evertitur eam in, alterum principes eu his. At eam elit noluisse, augue dicit offendit eum cu.
          </p>
          <MDBBtn color="primary" size="md">
            Visit their Site!
          </MDBBtn>
        </MDBCol>
      </MDBRow>
      <hr id="hr" />
    </MDBCardBody>
  </MDBCard>
    );
}



export default PartnerBlock
