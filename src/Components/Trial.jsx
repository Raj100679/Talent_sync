import React from "react";
import "../styles/trial.css";
import Check from "./Check";

function Trial() {
  return (
    <div className="maintrial">
      <div className="contenttri">
        <div className="headinchktri">
          <p className="headintri">
            Ready to clear the path to perfect communication?
          </p>
          <div className="tridiv1">
            <Check />
            <div className="tritext1">30 days free trial</div>
          </div>
          <div className="tridiv1">
            <Check />
            <div className="tritext1">Cancel at any time</div>
          </div>
          <div className="tridiv1">
            <Check />
            <div className="tritext1">Access to all features</div>
          </div>
          <div className="tridiv1">
            <Check />
            <div className="tritext1">Peronalized onboarding</div>
          </div>
        </div>
        <div className="fourthdiv">
          <button className="btn-1">
            <div className="sales">Talk to Sales</div>
          </button>
          <button className="btn-2">
            <div className="sign">Start your free trial</div>
          </button>
        </div>
      </div>
      <div className="escreen">
        <div className="escreentri">
            <div className="imgscreentri"></div>
        </div>
      </div>
    </div>
  );
}

export default Trial;
