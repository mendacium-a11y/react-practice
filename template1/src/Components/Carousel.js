import Carousel from 'react-bootstrap/Carousel';
import { motion } from "framer-motion";

function Carousel1() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block max-h-screen w-screen"
          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="absolute top-[-43vh] text-8xl w-full">First slide label</h1>
          <p className="absolute top-[-32vh] text-3xl w-full">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block max-h-screen w-screen"
          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className="absolute top-[-43vh] text-8xl w-full">Second slide label</h1>
          <p className="absolute top-[-32vh] text-3xl w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block max-h-screen w-screen "
          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h1 className="absolute top-[-43vh] w-full text-8xl">Third slide label</h1>
          <p className="absolute top-[-32vh] text-3xl text-lg w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const TextAnimation = () => {
  return (
    <motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >Hello World
        </motion.span>
    </motion.div>
  );
};

export default Carousel1;