import React from 'react'
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Testimonails() {

    const stars = [];

    for (let i = 0; i < 5; i++) {
        stars.push(<FaStar key={i} />);
    }
    return (
        <div className="sm:container mx-auto bg-white">
            <AnimationOnScroll animateIn=" animate__fadeInUp"  >
                <div className="flex justify-center items-center mb-4 sm:my-5"><FaQuoteRight size='40' className='text-center' /></div>
                <h1 className="text-4xl font-bold text-center">Happy Customers</h1>
            </AnimationOnScroll>
            <div className="flex flex-wrap mb-24">
                <div className="flex flex-wrap">
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig" className="w-full sm:w-1/3" >
                        <div className="  sm:my-4 sm:py-5 w-full">
                            <img className="mx-auto my-4" src="https://piquant.qodeinteractive.com/wp-content/uploads/2015/11/circle-testimonials-1.png" alt="" />
                            <p className="my-4 text-sm text-center px-5 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                                sunt debitis officiis harum, amet fugiat rerum quos
                                incidunt cupiditate animi a repellendus eveniet excepturi
                                similique quasi repellat officia non vero!</p>
                            <div className="flex my-4 justify-center">{stars}</div>
                            <p className="text-center font-bold text-xl">Nicole Hayden</p>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig" delay={300} className="w-full sm:w-1/3">
                        <div className="  sm:my-4 sm:py-5">
                            <img className="mx-auto my-4" src="https://piquant.qodeinteractive.com/wp-content/uploads/2015/11/circle-testimonials-1.png" alt="" />
                            <p className="my-4 text-sm text-center px-5 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                                sunt debitis officiis harum, amet fugiat rerum quos
                                incidunt cupiditate animi a repellendus eveniet excepturi
                                similique quasi repellat officia non vero!</p>
                            <div className="flex my-4 justify-center">{stars}</div>
                            <p className="text-center font-bold text-xl">Nicole Hayden</p>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig" delay={500} className="w-full sm:w-1/3">
                        <div className="  sm:my-4 sm:py-5">
                            <img className="mx-auto my-4" src="https://piquant.qodeinteractive.com/wp-content/uploads/2015/11/circle-testimonials-1.png" alt="" />
                            <p className="my-4 text-sm text-center px-5 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                                sunt debitis officiis harum, amet fugiat rerum quos
                                incidunt cupiditate animi a repellendus eveniet excepturi
                                similique quasi repellat officia non vero!</p>
                            <div className="flex my-4 justify-center">{stars}</div>
                            <p className="text-center font-bold text-xl">Nicole Hayden</p>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </div>

    )
}

export default Testimonails