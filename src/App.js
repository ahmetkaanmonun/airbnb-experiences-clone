import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import { data } from "./data";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.img}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.country}
        title={item.title}
        price={item.price}
        openspots={item.openspots}
        location={item.location}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="d-flex justify-content-center align-items-center">
        {cards}
      </div>
    </div>
  );
}
