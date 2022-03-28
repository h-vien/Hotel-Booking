import React, { useState } from "react";
import Slider from "react-slick";

import CardItem from "../CardItem/CardItem";
import styles from "../CardItem/style.module.scss";
const HotelSlider = () => {
  const [listEvent, setListEvent] = useState([]);
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {/* {listEvent?.map((event) => ( */}
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      {/* ))} */}
    </Slider>
  );
};

export default HotelSlider;
