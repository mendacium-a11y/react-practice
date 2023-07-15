import React from 'react';
import './styles.css';

// Function to generate the card body content
const CardBody = ({Food="Indian Cuisine"}) => {
  return (
    <>
      <div className="flip-card ">
        <div className="flip-card-inner border-1 border-gray-500">
          <div className="flip-card-front">
            <h1>{Food}</h1>
            <p></p>
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div >
    </>
  );
};

const CardFlip = () => {
  return (
    <>

      <div className="sm:container flex flex-wrap justify-around mx-auto my-32  ">
        <CardBody />
        <CardBody />
        <CardBody />
      </div>

    </>
  );
};

export default CardFlip;
