// First.js
import React, { useRef, useEffect } from 'react';
import './styles.css';

function First({ first, heading1, heading2, img, heading3 = "" }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.3, // Adjust this value as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          overlayRef.current.classList.add('fade-up'); // Add the fade-up animation class
        } else {
          overlayRef.current.classList.remove('fade-up'); // Remove the fade-up animation class
        }
      });
    }, options);

    if (overlayRef.current) {
      observer.observe(overlayRef.current);
    }

    return () => {
      if (overlayRef.current) {
        observer.unobserve(overlayRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center lg:h-3/4">
      <div className="lg:w-1/2 px-10 h-full flex flex-col justify-center lg:ps-10">
      <p className="text-white font-bold my-5 text-xl">_______ {first}</p>
        <p className="text-white font-bold mt-5 text-5xl lg:text-5xl ">{heading1}</p>
        <p className="text-white font-bold text-5xl lg:text-5xl ">{heading2}</p>
        <p className={`text-white font-bold mt-2 mb-5 text-5xl lg:text-5xl ${heading3 === "" ? 'hidden' : 'block'} `}>{heading3}</p>
        <p className="text-white  my-5 text-xl">Start using our easy-to-use tools with multiple options to improve.</p>
      </div>
      <div className="relative z-30 lg:w-1/2 h-full flex justify-center items-center rounded-3xl">
        <img src={img} alt="" className="rounded-xl shadow-2xl object-fit-cover w-[90%]" />
        <div
          ref={overlayRef}
          className="absolute w-full bg-orange-500 rounded-xl"
        ></div>
      </div>
    </div>
  );
}

export default First;
