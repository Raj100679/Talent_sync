import React from "react";
import Shopify from "../SocialImages/Shopify";
import Star from "./Star";
import AvatarSarah from "../TestimonialImages/AvatarSmall.png";
import "../styles/testimonial.css";
import ArrowLeft from "../TestimonialImages/ArrowLeft";
import ArrowRight from "../TestimonialImages/ArrowRight";
import Image1 from "../TestimonialImages/Img11.jpg";
import Image2 from "../TestimonialImages/Img22.jpg";
import Image3 from "../TestimonialImages/Img33.jpg";
import Image4 from "../TestimonialImages/Img44.jpg";
import Image5 from "../TestimonialImages/Img55.jpg";

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="container-test">
        <div className="content-test">
          <Shopify />
          <div className="fivestar">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p className="testp">
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and
            <br />
            top-notch security make it essential for our team.
          </p>
          <div className="att">
            <div className="rev-img-testimonial">
              <img src={AvatarSarah} alt="Sarah" className="avatarsize" />
              <div className="txtsuptest">
                <div className="testtxt">Sarah Thompson</div>
                <div className="supptesttxt">Project Manager, Shopify</div>
              </div>
            </div>
            <div className="arrowstest">
              <div className="arleft">
                <ArrowLeft />
              </div>
              <div className="arright">
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="contenttestimg">
          <img src={Image1} alt="Img1" className="imgtest1" />
          <img src={Image2} alt="Img2" className="imgtest2" />
          <img src={Image3} alt="Img3" className="imgtest3" />
          <img src={Image4} alt="Img4" className="imgtest4" />
          <img src={Image5} alt="Img5" className="imgtest5" />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
