// import pic from './pics/food-1.jpg'
import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import ParallaxFood from './Components/ParallaxFood'
import SimpleSlider from './Components/Slider';


function App() {
  return (
    <>
      <Navbar />

      <Carousel />
      
      <div className="container  bg-white my-10 ">
        <div className="flex flex-col md:flex-row justify-center items-center " >
          <div className="md:w-1/2 flex justify-center flex-col text-center md:me-24 my-10 md:m-0">
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
          <div className="md:w-1/2 my-10 md:m-0">
            <img src="./pics/food-1.jpg" alt="" className=""/>
          </div>
        </div>

      </div>
      <ParallaxFood/>
      
      
    </>
  );
}

export default App;
