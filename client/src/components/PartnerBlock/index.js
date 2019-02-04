import React from "react";
import { Grid } from "react-bootstrap";
import { Container, Row, Col } from "../Grid/index";
// import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";
function PartnerBlock() {
    return (
        <Grid clas>
            <Grid className="row header">
                <Grid col>
                    <h5>Our Charity Partners</h5>
                </Grid>
                <Col xs-6>
                    <p>This digital inventory is made possible by the following charities.<br /> If you wish to make a donation,
                        we ask you do so through their donation services.
                    </p>
                </Col>
            </Grid>
            <hr />
            <Grid>
                <Grid row>
                <Col size="md-3">
                    <img class="icon" src={window.location.origin + "/img/gabioinst.png"} alt="" />
                    </Col>
                    <Col size="md-9"> 
                        <p class="summary">
                            Our first charity parter, and for whom Parts-to-Purpose was originally designed, Georgia BioEd Institute brings educational science supplies from the shelf to the classNameroom. We are proud to work with GA BioEd Institute to bring educators across Georgia a way to easily and quickly find specific tools or supplies that are needed for their classroom. Here is something about them in their own words:
                        <br /><br />
                            The Georgia BioEd Institute is a division of Georgia Bio, a 501(c)(3) nonprofit organization serving the state’s life science industry. The Institute’s mission is to strengthen Georgia’s life sciences workforce pipeline through classNameroom-to-career initiatives that align with industry needs. We are building the capacity of Georgia classrooms to support the future life science workforce with teacher professional development in biotechnology, an equipment depot, a visiting scientist program, and the BioGENEius award for student biotechnology projects. The Institute provides training for current workforce needs (e.g., biotech courses for nonscientists and executive leadership training for future managers), and supports networking and mentoring for early career professionals through the Emerging Leaders Network.
                        </p>
                        <a href="http://www.georgiabioed.org/">visit their site</a>
                    </Col>
                </Grid>
                <hr />
                <Grid row>
                <Col size="md-3">
                    <img className="icon" src={window.location.origin + "/img/p2p.png"} alt="" />
                    </Col>
                    <Col size="md-9">
                        <p class="summary">
                            This is our example charity partner space. Here we will present a small about if information about our various partners and links to their site if users are interested in donating or contacting them for their own requests.
                        <br /><br />
                            Lorem ipsum dolor sit amet, fugit sententiae adversarium vim te, mea nusquam tincidunt ei. Vidit salutatus mea ea. Te vis errem suscipit, eum eu nonumy utamur mediocritatem. Erant dicam mollis sea ea, at has meliore dolores, est id alii posidonium. Probo ipsum sanctus cum ex. Sea cu fabulas oportere. Duo at persecuti moderatius efficiendi, modo tempor menandri ius ad. Laudem soleat albucius et usu. Sed ea utroque tibique mediocritatem. Sed modo dico molestie ne. In nam perpetua gubergren comprehensam, ad oportere splendide disputando vix. Id cum ludus detracto, in nulla aeque vix. An cum viderer integre voluptatibus, ludus tibique per et. Sit ne legimus mentitum placerat. Eos te sint commodo interpretaris, quod percipit evertitur eam in, alterum principes eu his. At eam elit noluisse, augue dicit offendit eum cu.Lorem ipsum dolor sit amet, fugit sententiae adversarium vim te, mea nusquam tincidunt ei. Vidit salutatus mea ea. Te vis errem suscipit, eum eu nonumy utamur mediocritatem. Erant dicam mollis sea ea, at has meliore dolores, est id alii posidonium. Probo ipsum sanctus cum ex. Sea cu fabulas oportere. Duo at persecuti moderatius efficiendi, modo tempor menandri ius ad. Laudem soleat albucius et usu. Sed ea utroque tibique mediocritatem. Sed modo dico molestie ne. In nam perpetua gubergren comprehensam, ad oportere splendide disputando vix. Id cum ludus detracto, in nulla aeque vix. An cum viderer integre voluptatibus, ludus tibique per et. Sit ne legimus mentitum placerat. Eos te sint commodo interpretaris, quod percipit evertitur eam in, alterum principes eu his. At eam elit noluisse, augue dicit offendit eum cu.
                        </p>
                        <a href="/">visit their site</a>
                    </Col>
                </Grid>
                <hr />
                <div className="row">
                    <p>If you would like to become a partner, please contact us at somewhere@something.com
                        </p>

                    <a href="/"><br />visit their site</a>
                </div>
            </Grid>
        </Grid>
        // <Container>
        // <Row>
        //     <Col xs={6}><h5 class="title">Our Charity Partners</h5></Col>
        //     <Col>2 of 2</Col>
        // <Card>"hello"</Card>
        // </Row>
        // </Container>

    );
}



export default PartnerBlock