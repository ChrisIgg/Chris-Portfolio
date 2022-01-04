import React from "react";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p className="bannerimage">
        <img
          src={
            process.env.PUBLIC_URL + "/images/Project_1/GreenTripPlanner_1.png"
          }
          alt="gtp1"
        />
        <a href="https://github.com/Jimbo8702/Project-One">Github Project</a>
      </p>
      <br />
      <br />

      <p className="bannerimage">
        <img
          src={process.env.PUBLIC_URL + "/images/Project_2/Note_5.png"}
          alt="note1"
        />
        <a href="https://github.com/sagegrayson/PR2-Note">Github Project</a>
      </p>
    </div>
  );
}
