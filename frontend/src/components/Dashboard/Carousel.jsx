import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import adOne from "./adOne.avif"
import adTwo from "./adTwo.avif"
import adThree from "./adThree.avif"
import adFour from "./adFour.avif"
import "./Carousel.css"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1, // Number of images visible on large screens
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2, // Number of images visible on medium screens
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3, // Number of images visible on small screens
    slidesToSlide: 1,
  },
};

const CarouselComponent = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      showDots={true}
      keyBoardControl={true}
      containerClass="carousel-container"
      itemClass="carousel-item"
    >
      <div>
        <img
          src={adOne}
          className="caroimage"
          alt="Image 1"
          
        />
      </div>
      <div>
        <img
          src={adTwo}
          className="caroimage"
          alt="Image 2"
          
        />
      </div>
      <div>
        <img
          src={adThree}
          className="caroimage"
          alt="Image 3"
          
        />
      </div>
      <div>
        <img
          src={adFour}
          className="caroimage"
          alt="Image 3"
          
        />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
