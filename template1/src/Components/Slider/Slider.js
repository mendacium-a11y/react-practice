import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"

import Card from 'react-bootstrap/Card';


export default () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    autoplay: {
      delay: 10, // Set the delay in milliseconds
      disableOnInteraction: false, // Allow interaction to prevent autoplay
    },
    mode: "free-snap",
    slides: {
      perView: window.innerWidth>700 ? 3 : 1,
      spacing: 15,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div className="navigation-wrapper mx-auto sm:px-32">
        <div ref={sliderRef} className="keen-slider  ">
          <div className="keen-slider__slide flex justify-center"><FoodCard img={"https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.jpg?b=1&s=170667a&w=0&k=20&c=W90jQ3_Lt_WfW7RvG1Qslr7HUA5V6H6LxSBP3SfYn-E="}/></div>
          <div className="keen-slider__slide flex justify-center"><FoodCard img={'https://cdn.pixabay.com/photo/2017/04/07/08/51/chicken-wings-2210462_640.jpg'}/></div>
          <div className="keen-slider__slide flex justify-center"><FoodCard img={"https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.jpg?b=1&s=170667a&w=0&k=20&c=W90jQ3_Lt_WfW7RvG1Qslr7HUA5V6H6LxSBP3SfYn-E="}/></div>
          <div className="keen-slider__slide flex justify-center"><FoodCard img={'https://cdn.pixabay.com/photo/2017/04/07/08/51/chicken-wings-2210462_640.jpg'}/></div>
          <div className="keen-slider__slide flex justify-center"><FoodCard img={"https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.jpg?b=1&s=170667a&w=0&k=20&c=W90jQ3_Lt_WfW7RvG1Qslr7HUA5V6H6LxSBP3SfYn-E="}/></div>
          <div className="keen-slider__slide flex justify-center"><FoodCard img={'https://cdn.pixabay.com/photo/2017/04/07/08/51/chicken-wings-2210462_640.jpg'}/></div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld} `}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}



function FoodCard({img}) {
  return (
    <Card className="w-3/4 h-auto rounded-none">
      <Card.Img className="h-64 w-auto rounded-none object-fit-cover" variant="top" src={img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        </Card.Body>
    </Card>
  );
}

