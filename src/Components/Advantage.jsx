import React from "react";
import "../styles/adv.css";
import VideoRec from "../Images/VideoRec";
import Recording from "../Images/Recording";
import Lock from "../Images/Lock";
import Calendar from "../Images/Calendar";
import People from "../SocialImages/People.png";
import HandDrawn from "../Images/HandDrawn";

function Advantage() {
  return (
    <div className="mainadv">
      <div className="firstdivadv">
        <div className="seconddivadv">
          <div className="subheadadv">The ClearLink Advantage</div>
          <div className="txtwrapadv">Why choose ClearLink?</div>
        </div>
        <p className="padv">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
      </div>
      <div className="thirddivadv">
        <div className="fourthdivadv">
          <div className="firstdivadv">
            <div className="zpicon">
              <VideoRec />
            </div>
            <div className="txtsup">
              <div className="txtadv">Crystal Clear HD Video</div>
              <p className="suptxting">
                No more pixelation or blurriness – just stunning, lifelike
                clarity that brings your team closer in meetings.
              </p>
            </div>
          </div>
          <div className="firstdivadv">
            <div className="zpicon">
              <Recording />
            </div>
            <div className="txtsup2">
              <div className="txtadv">Noise-canceling audio</div>
              <p className="suptxting">
                Say goodbye to distractions with our advanced audio tech for
                crisp, interruption-free conversations.
              </p>
            </div>
          </div>
          <div className="firstdivadv">
            <div className="zpicon">
              <Calendar />
            </div>
            <div className="txtsup">
              <div className="txtadv">Scheduling made easy</div>
              <p className="suptxting">
                Streamline your agenda with ClearLink's intuitive scheduling.
                Set up meetings, send invitations, and receive reminders in one
                place.
              </p>
            </div>
          </div>
          <div className="firstdivadv">
            <div className="zpicon">
              <Lock />
            </div>
            <div className="txtsup2">
              <div className="txtadv">Bank-grade security</div>
              <p className="suptxting">
                Your privacy is our priority with bank-grade security protocols
                safeguarding your meetings and data from unwanted intruders.
              </p>
            </div>
          </div>
        </div>
        <img className="ppl" src={People} alt="People Image" />
      </div>
      <div className="handdrawn">
        <HandDrawn  />
      </div>
    </div>
  );
}

export default Advantage;
