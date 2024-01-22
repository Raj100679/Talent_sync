import React from "react";
import "../styles/faq.css";
import MinusCircle from "./MinusCircle";
import PlusCircle from "./PlusCircle";
import Stroke from "./Stroke";

function Faq() {
  return (
    <div className="maindivfaq">
      <div className="faqdiv">
        <div className="firstdivfaq">
          <div className="seconddivfaq">
            <div className="subheadfaq">Support</div>
            <div className="txtfaq">FAQs</div>
          </div>
          <p className="everythingfaq">
            <span>
              Everything you need to know about the product and billing. Can’t
              find the answer you’re looking for? Please
            </span>
            <span> </span>
            <span className="txtfaq1">chat to our friendly team</span>
            <span className="dotfaq">.</span>
          </p>
        </div>
        <div className="thirddivfaq">
          <div className="firstfaq">
            <div className="firstfaqdiv">
              <p className="faq1txt">
                How many participants can join a ClearLink video conference?
              </p>
              <p className="faq1ans">
                ClearLink offers flexible meeting options. Depending on your
                subscription plan, you can host meetings with varying numbers of
                participants. Our plans are designed to accommodate small team
                collaborations and large-scale webinars, ensuring you have the
                right fit for your needs.
              </p>
            </div>
            <div className="minusfaq">
              <MinusCircle />
            </div>
          </div>
          <div className="secondfaqdiv">
            <div className="faq1txt">
              Can I use ClearLink on multiple devices?
            </div>
            <PlusCircle/>
          </div>
          <Stroke/>
          <div className="secondfaqdiv">
            <div className="faq1txt">
            Is ClearLink compatible with other video conferencing platforms?
            </div>
            <PlusCircle/>
          </div>
          <Stroke/>
          <div className="secondfaqdiv">
            <div className="faq1txt">
            How does ClearLink ensure the security of my video conferences?
            </div>
            <PlusCircle/>
          </div>
          <Stroke/>
          <div className="secondfaqdiv">
            <div className="faq1txt">
            Do I need to download any software to use ClearLink?
            </div>
            <PlusCircle/>
          </div>
          <Stroke/>
          <div className="secondfaqdiv">
            <div className="faq1txt">
            What kind of customer support does ClearLink provide?
            </div>
            <PlusCircle/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
