import React from "react";
import Logo from "../Images/Logo";
import Chevron from "../Images/Chevron";
import "../styles/nav.css";

function Navbar() {
  return (
    <div className="nav">
      <div>
        <span className="firstdiv">
          <div className="logo">
            <Logo />
          </div>
          <p className="clrtext">ClearLink</p>
          <p className="clrdot">.</p>
        </span>
      </div>
      <div className="seconddiv">
        <div className="dropchev">
          <div className="droptext">Products</div>
          <div className="chevst">
            <Chevron />
          </div>
        </div>
        <div className="dropchev">
          <div className="droptext">Solutions</div>
          <div className="chevst">
            <Chevron />
          </div>
        </div>
        <div className="dropchev">
          <div className="droptext">Resources</div>
          <div className="chevst">
            <Chevron />
          </div>
        </div>
        <div className="dropchev">
          <div className="droptext">Pricing</div>
        </div>
      </div>
      <div className="fourthdiv">
        <button className="btn-1">
            <div className="sales">Talk to Sales</div>
        </button>
        <button className="btn-2">
            <div className="sign">Sign up for free</div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
