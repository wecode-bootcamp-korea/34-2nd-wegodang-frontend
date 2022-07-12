import React from 'react';
import Category from './Category.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <img
      alt="rightButton"
      src="/images/icons/chevron-right-solid.svg"
      style={{
        position: 'absolute',
        right: '30px',
        top: '38px',
        display: 'block',
        opacity: '0.7',
        width: '25px',
        height: '25px',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <img
      alt="leftButton"
      src="/images/icons/chevron-left-solid.svg"
      style={{
        position: 'absolute',
        left: '30px',
        display: 'block',
        opacity: '0.7',
        width: '25px',
        height: '25px',
      }}
      onClick={onClick}
    />
  );
}

const Paging = ({ categories }) => {
  const settings = {
    slidesToShow: 10,
    slidesToScroll: 10,
    speed: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      {categories.map(category => {
        return <Category key={category.id} category={category} />;
      })}
    </Slider>
  );
};

export default Paging;
