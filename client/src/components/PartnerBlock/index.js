import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";
function PartnerBlock() {
    return (
        <div class="container container-fluid">
            <div class="row">
                <div class="col-sm-5">
                    <div class="title">
                        <h5 class="title">Our Charity Partners</h5>
                    </div>
                </div>
                <div class="col-sm-7">
                    {/* <div class="card card-right">
                        <div class="card-body text-right"> */}
                    <p>
                        This digital inventory is made possible by the following charities.<br></br> If you wish to make a donation,
                        we ask you do so through their donation services.
                            </p>
                    {/* </div>
                    </div> */}
                </div>
            </div>
            <hr></hr>
            <div class="row">
                        <img class="icon" src="../../assets/images/gabioinst.png" alt="test"></img>
                        <p>Some quick example text to build on, Georgia Bio Institutue is ect ect...
                        </p>

                        <a href="#"><br></br>visit their site</a>
            </div>
            <hr></hr>
            <div class="row">
                        {/* <img class="icon" src="../../assets/images/gabioinst.png" alt="test"></img> */}
                        <p>If you would like to become a partner, please contact us at somewhere@something.com
                        </p>

                        <a href="#"><br></br>visit their site</a>
            </div>
        </div>
    );
}

export default PartnerBlock
