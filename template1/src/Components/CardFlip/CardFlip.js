import React from 'react';
import './styles.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

// Function to generate the card body content
const CardBody = ({ Food = "Indian Cuisine" }) => {
  return (
    <>
      <div className="flip-card my-3 sm:my-8">
        <div className="flip-card-inner border-1 border-gray-500">
          <div className="flip-card-front flex justify-center items-center">
            <h1>{Food}</h1>
            <p></p>
          </div>
          <div className="flip-card-back flex justify-center items-center flex-col">
            <h1>Indian Food</h1>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
        </div>
      </div >
    </>
  );
};

const CardFlip = () => {
  return (
    <>
      <div className="bg-black pb-5 py-2 sm:py-20 border-b-2">
        <AnimationOnScroll animateIn="animate__fadeIn" delay={300}>
        <h1 className="my-5 text-center sm:px-36 text-5xl text-white">Services</h1>
        <p  className="my-5 text-center px-10 sm:px-36 text-lg font-thin text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Consequatur excepturi molestiae commodi dolores consectetur 
          minima sunt odio. Praesentium totam, voluptas, odit deserunt 
          odio deleniti amet iusto eos, earum molestias fuga.</p></AnimationOnScroll>

        <div className="sm:container flex flex-wrap justify-around mx-auto sm:my-32  ">
          <AnimationOnScroll animateIn="animate__fadeInBottomLeft">
            <CardBody />
          </AnimationOnScroll>
          <AnimationOnScroll delay={300} animateIn="animate__fadeInBottomLeft">
            <CardBody />
          </AnimationOnScroll>
          <AnimationOnScroll delay={500} animateIn="animate__fadeInBottomLeft">
            <CardBody />
          </AnimationOnScroll>
        </div>
      </div>

    </>
  );
};

export default CardFlip;
