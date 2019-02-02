import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";
function PartnerBlock() {
    return (
        <div className="container  container-fluid">
            <div className="row">
                <div className="col-sm-5">
                    <div className="title">
                        <h5 className="title">Our Charity Partners</h5>
                    </div>
                </div>
                <div className="col-sm-7">
                    <p>
                        This digital inventory is made possible by the following charities.<br /> If you wish to make a donation,
                        we ask you do so through their donation services.
                            </p>
                </div>
            </div>
            <hr />
            <div>
                <img className="float-left" src={window.location.origin + "/img/gabioinst.png"} alt="" />
                <div className="row">
                <p className="justified">Our first charity parter, and for whom Parts-to-Purpose was originally designed, Georgia BioEd Institute brings educational science supplies from the shelf to the classNameroom. We are proud to work with GA BioEd Institute to bring educators across Georgia a way to easily and quickly find specific tools or supplies that are needed for their classroom. Here is something about them in their own words:
                        </p>
                <p>The Georgia BioEd Institute is a division of Georgia Bio, a 501(c)(3) nonprofit organization serving the state’s life science industry. The Institute’s mission is to strengthen Georgia’s life sciences workforce pipeline through classNameroom-to-career initiatives that align with industry needs. We are building the capacity of Georgia classrooms to support the future life science workforce with teacher professional development in biotechnology, an equipment depot, a visiting scientist program, and the BioGENEius award for student biotechnology projects. The Institute provides training for current workforce needs (e.g., biotech courses for nonscientists and executive leadership training for future managers), and supports networking and mentoring for early career professionals through the Emerging Leaders Network.
                        </p>

                <a href="http://www.georgiabioed.org/">visit their site</a>
                </div>
            </div>
            <hr />
            <div>
                <img className="float-left" src={window.location.origin + "/img/p2p.png"} alt=""/>
                <div className="row">
                <p>This is our example charity partner space. Here we will present a small about if information about our various partners and links to their site if users are interested in donating or contacting them for their own requests.
                        </p>
                <p>Lorem ipsum dolor sit amet, fugit sententiae adversarium vim te, mea nusquam tincidunt ei. Vidit salutatus mea ea. Te vis errem suscipit, eum eu nonumy utamur mediocritatem. Erant dicam mollis sea ea, at has meliore dolores, est id alii posidonium. Probo ipsum sanctus cum ex. Sea cu fabulas oportere. Duo at persecuti moderatius efficiendi, modo tempor menandri ius ad. Laudem soleat albucius et usu. Sed ea utroque tibique mediocritatem. Sed modo dico molestie ne. In nam perpetua gubergren comprehensam, ad oportere splendide disputando vix. Id cum ludus detracto, in nulla aeque vix. An cum viderer integre voluptatibus, ludus tibique per et. Sit ne legimus mentitum placerat. Eos te sint commodo interpretaris, quod percipit evertitur eam in, alterum principes eu his. At eam elit noluisse, augue dicit offendit eum cu.

                        </p>

                <a href="/">visit their site</a>
                </div>
            </div>
            <hr />
            <div className="row">
                <p>If you would like to become a partner, please contact us at somewhere@something.com
                        </p>

                <a href="/"><br />visit their site</a>
            </div>
        </div>
    );
}

export default PartnerBlock
