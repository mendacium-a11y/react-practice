import React from "react";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardWithImage from "./CardWithImage";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: document.documentElement.clientWidth < 900 ? 1 :3,
    slidesToScroll: 1
  };

  // Create an array to hold the slide elements
  const slideElements = [];
  for (let i = 0; i < 5; i++) {
    slideElements.push(
      <div key={i} className="border-4 flex mx-auto px-auto">
        <CardWithImage />
      </div>
    );
  }

  return (
    <Slider {...settings}>
      
      {/* {slideElements} */}
      <div ><CardWithImage/></div>
      <div ><CardWithImage/></div>
      <div ><CardWithImage/></div>
      <div ><CardWithImage/></div>
      <div ><CardWithImage/></div>
      
    </Slider>
  );
}
