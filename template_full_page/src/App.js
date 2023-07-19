
import { useState } from 'react';
import './App.css';
import ContactForm from './Components/ContactForm';
import First from './Components/scrollElement';
import { BiMenu } from "react-icons/bi";
import { FaX } from "react-icons/fa6";



function App() {
  const [navShow, setNavShow] = useState("hidden")

  function showNav(){
    
    if (navShow === "hidden") {
      console.log(navShow)
      setNavShow("block")
      setTimeout(()=>{
        console.log(navShow)
      },800)
    }
    else {
      setNavShow("hidden")
      console.log(navShow)
      

    }
  }

  return (
    <>
      <div
        className="w-screen relative bg-gradient-to-r from-red-400 to-orange-400 h-screen snap-y snap-mandatory overflow-y-auto"

      >
        <div onClick={showNav} className="fixed z-100 top-5 right-6 border-4 border-black rounded-lg" >
          <BiMenu color='black' size='3em' />
        </div>
        <div className="fixed z-100 top-5 left-6  rounded-lg" >
          <img src="./Untitled.png" alt="" />
        </div>
        <div className={`absolute z-50 bg-white text-black right-0 h-screen p-5 w-[25vw] ${navShow}
                          transition-all duration-150 ease-linear `}>
          <div onClick={showNav} className=" flex justify-end "><FaX size="2rem"/></div>
          <ul>
            <li className="my-5 text-2xl ">Home</li>
            <li className="my-5 text-2xl ">Home</li>
            <li className="my-5 text-2xl ">Home</li>
            <li className="my-5 text-2xl ">Home</li>
          </ul>
        </div>

        <div className="">
          <div className="snap-center w-[100vw] h-[100vh] sm:p-32  flex justify-center items-center">
            <First first="Photography"
              heading1="First" heading2="Photography"
              img="https://john-react.wethemez.com/static/media/slider_img1.52fd2fad.jpg"
            />
          </div>
          <div className="snap-center w-[100vw] h-[100vh] sm:p-32  flex justify-center items-center">
            <First
              first="Developer"
              heading1="Mrtin Solonick"
              heading2="Independent"
              heading3="Freelancer"
              img="https://john-react.wethemez.com/static/media/slider_img2.022f6d38.jpg" />
          </div>
          <div className="snap-center w-[100vw] h-[100vh] sm:p-32  flex justify-center items-center">
            <First
              first="Team Work"
              heading1="Your Online Product"
              heading2="can be Ready"

              img="https://john-react.wethemez.com/static/media/slider_img3.6c06d376.jpg" />
          </div>
          <div className="snap-center w-[100vw] h-[100vh] sm:p-32  flex justify-center items-center">
            <ContactForm />
          </div>
        </div>

      </div>
    </>
  );
}


export default App;
