import React from "react";
import "../styles/soc.css";
import Automattic from "../SocialImages/Automattic";
import Shopify from "../SocialImages/Shopify";
import Coinbase from "../SocialImages/Coinbase";
import Dropbox from "../SocialImages/Dropbox ";
import Intercom from "../SocialImages/Intercom";
import Marvel from "../SocialImages/Marvel";

function Social() {
  return (
    <div className="firstdivsoc">
      <p className="pt">
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      <div className="seconddivsoc">
        <Shopify />
        <Coinbase/>
        <Dropbox/>
        <Intercom/>
        <Marvel/>
        <Automattic />
      </div>
    </div>
  );
}

export default Social;
