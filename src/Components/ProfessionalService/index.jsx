import React from "react";
import Slider from "react-slick";
import style from "./style.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const Service = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="container ml-10 my-20">
      <h2 className="text-3xl">Popular professional services</h2>
      <Slider {...settings}>
        <div>
          <img
            className="px-4 h-72 rounded-3xl"
            src="https://picsum.photos/250"
            alt="photo"
          />
        </div>
        <div>
          <img
            className="px-4 h-72 rounded-3xl"
            src="https://picsum.photos/250"
            alt="photo"
          />
        </div>
        <div>
          <img
            className="px-4 h-72 rounded-3xl"
            src="https://picsum.photos/250"
            alt="photo"
          />
        </div>
        <div>
          <img
            className="px-4 h-72 rounded-3xl"
            src="https://picsum.photos/250"
            alt="photo"
          />
        </div>
        <div>
          <img
            className="px-4 h-72 rounded-3xl"
            src="https://picsum.photos/250"
            alt="photo"
          />
        </div>
        <div>
          <img
            className="px-4 h-72 rounded-3xl"
            src="https://picsum.photos/250"
            alt="photo"
          />
        </div>
        <div>
          <img
            className="px-4 h-72 rounded-3xl"
            src="https://picsum.photos/250"
            alt="photo"
          />
        </div>
        <div>
          <img
            className="px-4 h-72 rounded-3xl"
            src="https://picsum.photos/250"
            alt="photo"
          />
        </div>
        <div>
          <img
            className="px-4 h-72 rounded-3xl"
            src="https://picsum.photos/250"
            alt="photo"
          />
        </div>
        <div>
          <img
            className="px-4 h-72 rounded-3xl"
            src="https://picsum.photos/250"
            alt="photo"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Service;
