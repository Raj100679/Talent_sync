import React from "react";
import "../styles/mid.css";
import Assistant from "../Images/Assistant";
import AvatarGroup from "./AvatarGroup";
import Star from "./Star";
import Ani1 from "../Images/ani1.png";
import Ani3 from "../Images/ani3.png";
import Ani4 from "../Images/ani4.png";
import Microphone from "../Images/Microphone";
import VideoRec from "../Images/VideoRec";
import Message from "../Images/Message";
import Tv from "../Images/Tv";
import Smiley from "../Images/Smiley";
import Settings from "../Images/Settings";


function MidPage() {
  return (
    <div className="firstdivmid">
      <div className="seconddivmid">
        <div className="thirddivmid">
          <p className="uniting">
            Uniting the world,
            <br />
            one video call at a time
          </p>
          <p className="firstp">
            Experience the future of communication with ClearLink – where
            crystal-clear video conferencing meets unparalleled simplicity.
          </p>
        </div>
        <div className="fourthdivmid">
          <div className="btn-mid">
            <button className="btn-3">
              <div className="trialmid">Start your free trial</div>
            </button>
          </div>
          <div className="fifthdivmid">
            <Assistant />
            <div className="trialmid2">Discover AI assistant</div>
          </div>
        </div>
        <div className="review">
          <AvatarGroup />
          <div className="user-review">
            <div className="fifthdivmid">
              <Star style={{ margin: "0 -2px" }} />
              <Star style={{ margin: "0 -2px" }} />
              <Star style={{ margin: "0 -2px" }} />
              <Star style={{ margin: "0 -2px" }} />
              <Star style={{ margin: "0 -2px" }} />
              <div className="startext">5.0</div>
            </div>
            <div className="revtext">From 3,000+ reviews</div>
          </div>
        </div>
      </div>
      <div className="sixthdivmid">
        <div className="seventhdivmid">
          <div className="eightdivmid">
            <div className="aniimg1">
              <img   src={Ani1} alt="anime1" />
            </div>
            <div className="aniimg2" />
            <div className="img2wrap">
              <img   src={Ani3} alt="anime2" />
            </div>
          </div>
          <div className="ninthdivmid">
            <div className="wrapperimg2">
                <img className="aniimg4" src={Ani4} alt="Ani3" />
            </div>
            <div className="aniimg5"></div>
            <div className="aniimg6"></div>
          </div>
        </div>
        <div className="tenthdivmid">
          <div className="zicon">
            <Microphone className="icon-instance"/>
          </div>
          <div className="zicon">
            <VideoRec className="icon-instance"/>
          </div>
          <div className="zicon">
            <Tv className="icon-instance"/>
          </div>
          <div className="zicon">
            <Smiley className="icon-instance"/>
          </div>
          <div className="zicon">
            <Message className="icon-instance"/>
          </div>
          
          <div className="zicon">
            <Settings className="icon-instance"/>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default MidPage;
