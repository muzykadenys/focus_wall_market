import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

type CarouselItem = {
  img: string;
  text: string;
};

type CarouselElTypes = {
  slidesList: Array<CarouselItem>;
};
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom_arrow`}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    >
      <img src="../img/arrow_right.svg" width={30} alt="arrow right" />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom_arrow`}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    >
      <img src="../img/arrow_left.svg" width={30} alt="arrow left" />
    </div>
  );
}

export default function CarouselEl({ slidesList }: CarouselElTypes) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 2.35,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    // autoplay: true,
    speed: 500,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="carouselBlock">
      <h1>Основа для конструкції</h1>

      <div className="slider-container">
        <Slider {...settings}>
          {slidesList.map((el: CarouselItem) => (
            <div className="slider-container_el" key={`SCI${el.text}`}>
              <img src={el.img} alt="slide"/>
              <p>{el.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
