import React from "react";
import Logo from "../Images/Logo";
import "../styles/footer.css";
import AppStore from "./AppStore";
import PlayStore from "./PlayStore";

function Footer() {
  return (
    <div className="footer">
      <div className="firstdivfoot">
        <div className="seconddivfoot">
          <div className="thirddivfoot">
            <span className="firstdiv">
              <div className="logo">
                <Logo />
              </div>
              <p className="clrtext">ClearLink</p>
              <p className="clrdot">.</p>
            </span>
          </div>
          <p className="supporttxtfoot">
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>
        <div className="links-col">
          <div className="footlink">
            <div className="foothead">Product</div>
            <div className="footheadtag">
              <p className="pfoot">Overview</p>
              <p className="pfoot">Features</p>
              <p className="pfoot">Solutions</p>
              <p className="pfoot">Tutorials</p>
              <p className="pfoot">Pricing</p>
            </div>
          </div>
          <div className="footlink">
            <div className="foothead">Company</div>
            <div className="footheadtag">
              <p className="pfoot">About us</p>
              <p className="pfoot">Careers</p>
              <p className="pfoot">Press</p>
              <p className="pfoot">News</p>
              <p className="pfoot">Contact</p>
            </div>
          </div>
          <div className="footlink">
            <div className="foothead">Resources</div>
            <div className="footheadtag">
              <p className="pfoot">Blog</p>
              <p className="pfoot">Events</p>
              <p className="pfoot">Help center</p>
              <p className="pfoot">Tutorials</p>
              <p className="pfoot">Support</p>
            </div>
          </div>
          <div className="footlink">
            <div className="foothead">Legal</div>
            <div className="footheadtag">
              <p className="pfoot">Terms</p>
              <p className="pfoot">Privacy</p>
              <p className="pfoot">Cookies</p>
              <p className="pfoot">Licenses</p>
              <p className="pfoot">Contact</p>
            </div>
          </div>
          <div className="fourthdivfoot">
            <div className="headfoot2">Get the app</div>
            <AppStore/>
            <PlayStore/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
