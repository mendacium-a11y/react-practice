import React from 'react'
// import bg from './pics/parallax-1.jpg'
import { Parallax } from 'react-parallax';
import SimpleSlider from './Slider';
// import Slider from 'react-slick';
// import Slider from "react-slick";



function ParallaxFood() {
  return (
    <Parallax blur={10} bgImage="https://piquant.qodeinteractive.com/wp-content/uploads/2015/11/parallax-1.jpg" bgImageAlt="the cat" strength={200}>
        <div className="md:container mx-auto my-16 px-10 md:px-12">
          <div className="text-white text-center my-16 md:px-48">
            <h1 className="text-3xl sm:text-4xl md:text-5xl my-10">Recommended by Our Chef</h1>
            <p className=" text-base sm:text-lg md:text-xl my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          </div>
          <SimpleSlider/>
        </div>
    </Parallax>
  )
}

export default ParallaxFood