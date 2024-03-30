import React from "react";
import clockImg from "./clock.png";

export default function MyClockImage() {
  return (
    <div style={{ margin: "50px 10px" }}>
      <img
        src={clockImg}
        alt="clock"
        style={{ width: "300px", height: "300px" }}
      />
    </div>
  );
}
