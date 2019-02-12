import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100" src={window.location.origin + "/img/Developer_1321x583.png"} alt="First slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Who We Are</h3>
              <p>We are a group of IT developers looking to build simple solutions to help small nonprofit organizations</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img className="d-block w-100" src={window.location.origin + "/img/Product_1140x583.png"} alt="Second slide" />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Our Product</h3>
              <p>Parts-to-Purpose is an open-source, inexpensive inventory and people management platform that nonprofits can use to manage their inventory of donations, donors, and donees</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100" src={window.location.origin + "/img/Goal_1140x583.png"} alt="Third slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Our Goal</h3>
              <p>To help nonprofits meet their mission by immediately connecting the “purpose” in need to the “part” that’s needed</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;
