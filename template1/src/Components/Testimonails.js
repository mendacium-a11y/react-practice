import React from 'react'
import { FaQuoteRight,FaStar } from "react-icons/fa";

function Testimonails() {

    const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(<FaStar key={i} />);
  }
  return (
    <div className="sm:container mx-auto bg-slate-200">
        <div className="flex justify-center items-center my-5"><FaQuoteRight size='40' className='text-center'/></div>
        <h1 className="text-2xl font-bold text-center">Happy Customers</h1>
        <div className="flex flex-wrap">
            <div className="w-1/3  my-4 py-5">
                <img className="mx-auto my-4" src="https://piquant.qodeinteractive.com/wp-content/uploads/2015/11/circle-testimonials-1.png" alt="" />
                <p className="my-4 text-sm text-center px-5 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum 
                    sunt debitis officiis harum, amet fugiat rerum quos 
                    incidunt cupiditate animi a repellendus eveniet excepturi 
                    similique quasi repellat officia non vero!</p>
                <div className="flex my-4 justify-center">{stars}</div>
                <p className="text-center font-bold text-xl">Nicole Hayden</p>
            </div>
            <div className="w-1/3  my-4 py-5">
                <img className="mx-auto my-4" src="https://piquant.qodeinteractive.com/wp-content/uploads/2015/11/circle-testimonials-1.png" alt="" />
                <p className="my-4 text-sm text-center px-5 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum 
                    sunt debitis officiis harum, amet fugiat rerum quos 
                    incidunt cupiditate animi a repellendus eveniet excepturi 
                    similique quasi repellat officia non vero!</p>
                <div className="flex my-4 justify-center">{stars}</div>
                <p className="text-center font-bold text-xl">Nicole Hayden</p>
            </div>
            <div className="w-1/3  my-4 py-5">
                <img className="mx-auto my-4" src="https://piquant.qodeinteractive.com/wp-content/uploads/2015/11/circle-testimonials-1.png" alt="" />
                <p className="my-4 text-sm text-center px-5 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum 
                    sunt debitis officiis harum, amet fugiat rerum quos 
                    incidunt cupiditate animi a repellendus eveniet excepturi 
                    similique quasi repellat officia non vero!</p>
                <div className="flex my-4 justify-center">{stars}</div>
                <p className="text-center font-bold text-xl">Nicole Hayden</p>
            </div>
        </div>
        </div>

  )
}

export default Testimonails