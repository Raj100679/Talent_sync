import React from "react";
import Avatar1 from "../Images/Avatar1.png";
import Avatar2 from "../Images/Avatar2.png";
import Avatar3 from "../Images/Avatar3.png";
import Avatar4 from "../Images/Avatar4.png";
import Avatar5 from "../Images/Avatar5.png";

function AvatarGroup() {
  return (
    <div className="parentcon">
      <div class="images-container stack-from-right">
        <div class="circular-image">
          <img src={Avatar1} alt="avatar-1" class="circular-image" />
        </div>
        <div class="circular-image">
          <img src={Avatar2} alt="avatar-2" class="circular-image" />
        </div>
        <div class="circular-image">
          <img src={Avatar3} alt="avatar-3" class="circular-image" />
        </div>
        <div class="circular-image">
          <img src={Avatar4} alt="avatar-4" class="circular-image" />
        </div>
        <div class="circular-image">
          <img src={Avatar5} alt="avatar-5" class="circular-image" />
        </div>
      </div>
    </div>
  );
}

export default AvatarGroup;
