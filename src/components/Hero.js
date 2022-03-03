import React from "react";

export default function Hero() {
  return (
    <div className="container">
      <div className="col-sm text-center">
        <img
          className="img-fluid"
          src="/assets/images/hero-photo.png"
          alt=""
        ></img>
      </div>

      <div className="col-sm  text-center mt-2">
        <h1>Online Experiences</h1>
      </div>

      <div className="col-sm  mt-2">
        <p className="text-justify text-center">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
