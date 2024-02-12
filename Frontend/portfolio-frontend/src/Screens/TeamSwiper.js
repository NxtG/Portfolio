// TeamSwiper.js

import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TeamSwiper = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className=''>
          <img src={slide} alt={`slide-${index}`} className="w-1/2" />
        </div>
      ))}
    </Slider>
  );
};

export default TeamSwiper;
