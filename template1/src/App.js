// import pic from './pics/food-1.jpg'
import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Slider from './Components/Slider/Slider';
import Testimonails from './Components/Testimonails';
import CardFlip from './Components/CardFlip/CardFlip';
import Footer from './Components/Footer';
import { AnimationOnScroll } from "react-animation-on-scroll";




function App() {

  const backgroundImageUrl = "https://images.unsplash.com/photo-1588416820614-f8d6ac6cea56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudCUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";


  const styles = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <Navbar />

      <Carousel />

      <div className="container  bg-white my-10">
        <div className="flex flex-col md:flex-row justify-center items-center " >
          <AnimationOnScroll animateIn="animate__fadeInRightBig" className="md:w-1/2 b">
            <div className=" flex justify-center flex-col text-center md:me-24   sm:my-10 md:m-0">
              <h2 className="text-4xl font-bold my-4">Welcome to Piquant</h2>
              <p className="text-center my-4 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia facilis aspernatur hic voluptate alias perferendis,
                esse enim laborum recusandae quasi rerum dolores adipisci modi
                aliquid! Eius esse ratione velit dicta!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia facilis aspernatur hic voluptate alias perferendis,
                esse enim laborum recusandae quasi rerum dolores adipisci modi
                aliquid! Eius esse ratione velit dicta!</p>
              <button className="font-bold p-2 px-3 bg-black text-white w-2/4 mx-auto">Contact Us</button>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInLeftBig" className="md:w-1/2 ">
            <div className=" my-10 md:m-0">
              <img src="./pics/food-1.jpg" alt="" className="" />
            </div>
          </AnimationOnScroll>
        </div>
      </div>
      <div style={styles}>
        <div className="sm:container  bg-transparent my-[5vh] sm:my-[12vh] pt-[1vh] pb-[8vh]  mx-auto ">
          <div className="text-center sm:my-24 mx-8 px-3">
            <AnimationOnScroll animateIn="animate__fadeIn">
            <h1 className="my-8 font-bold text-4xl sm:text-5xl text-white">Recommended by Our Chef</h1></AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn" delay={500}>
            <p className="my-8 sm:px-12 text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t
              empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip.</p></AnimationOnScroll>
          </div>
          <Slider />
        </div>
      </div>
      <div className="bg-white my-[-12vh] py-[8vh]">
        <Testimonails /></div>
      <CardFlip />
      <Footer />




    </>
  );
}

export default App;
