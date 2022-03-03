import React from "react";

export default function Card({
  img,
  rating,
  reviewCount,
  country,
  title,
  price,
  openspots,
  location,
}) {
  let badgeText;
  if (openspots === 0) {
    badgeText = "Sold Out";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card mb-2 p-2 ml-4">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`/assets/images/${img}`} alt="" className="card-image"></img>

      <div className="card-text-content mt-2">
        <img
          className="star-logo"
          src="/assets/images/star-logo.png"
          alt=""
        ></img>
        <span className="rank ml-1">{rating}</span>
        <span className="comments ml-1">({reviewCount})</span>
        <span className="country ml-1">{country}</span>
      </div>
      <p className="card-text card-comment mt-2">{title}</p>
      <p className="card-text card-price">
        <b>From ${price} /</b> person
      </p>
    </div>
  );
}
