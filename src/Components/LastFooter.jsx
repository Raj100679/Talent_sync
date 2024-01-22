import React from "react";
import "../styles/footer.css";
import LinkedIn from "../FooterImages/LinkedIn";
import Twitter from "../FooterImages/Twitter";
import FaceBook from "../FooterImages/FaceBook";
import Insta from "../FooterImages/Insta";
import GitHub from "../FooterImages/GitHub";
import Yt from "../FooterImages/Yt";

function LastFooter() {
  return (
    <div className="lfoot">
      <div className="containerlfoot">
        <div className="contentlfoot">
          <p className="foot-text">© 2023 ClearLink. All rights reserved.</p>
          <div className="soc-icons-foot">
            <LinkedIn/>
            <Twitter/>
            <FaceBook/>
            <Insta/>
            <GitHub/>
            <Yt/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastFooter;
