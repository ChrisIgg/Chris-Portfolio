import React from "react";
import List from "../List";

export default function Home() {
  return (
    <div>
      <h1 className="font-weight-bold">
        Christopher Insignares <br />
      </h1>
      <h4>Computer Programmer -- NYC</h4>
      <br />

      <p>
        <h6 className="font-weight-bold">Base Understandings:</h6>
        <List />
        Bootcamp in the fall of 2021, all pages in production available here.
      </p>
    </div>
  );
}
