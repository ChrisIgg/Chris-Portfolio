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
        <a href="https://github.com/ChrisIgg">Github Profile</a>
      </p>
    </div>
  );
}
