import React from 'react'

function ContactForm() {
    return (
        <div className="flex flex-wrap justify-center items- pt-24 lg:pt-0 items-center lg:h-full w-full my-5 lg:px-40 ">
            <div className="lg:w-1/3 h-full py-8  flex flex-col justify-center text-white text-xl">
                <p className="text-4xl my-3 font-bold">Contact Info</p>
                <p className="my-2">Address: Z105 - Tan Thinh, Thai Nguyen - Viet Nam </p>
                <p className="my-2">Phone: +1.900.3456.789</p>
                <p className="my-2">Email: yourname@somemail.com</p>
                <p className="my-2">Website: http://example.com</p>
            </div>
            <div className="lg:w-2/3 ps-10">
                <div className="flex flex-nowrap items-start my-12 placeholder-white">
                    <input placeholder='Name' className="py-4 focus:outline-none w-1/2 placeholder-white border-white border-b-[1px] bg-transparent me-2" type="text" />
                    <input placeholder='Email' className="py-4 w-1/2 focus:outline-none placeholder-white border-white border-b-[1px] bg-transparent ms-2" type="text" />
                </div>
                <div className="flex flex-nowrap my-12">
                    <input placeholder='Phone' className="py-4 w-1/2 focus:outline-none placeholder-white border-white border-b-[1px] bg-transparent me-2" type="text" />
                    <input placeholder='Subject' className="w-1/2 focus:outline-none placeholder-white border-white border-b-[1px] bg-transparent ms-2" type="text" />
                </div>
                <textarea placeholder='Message' name="" id="" cols="30" rows="8" className="placeholder-white focus:outline-none border-white w-full mx-2 bg-transparent border-b-[1px]"></textarea>
            </div>
        </div>
    )
}

export default ContactForm