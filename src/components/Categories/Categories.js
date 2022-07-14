import React from 'react';
import Category from './Category.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Arrow, StSlider } from './Categories.styled.js';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <Arrow
      className={className}
      alt="rightButton"
      src="/images/icons/chevron-right-solid.svg"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;

  return (
    <Arrow
      className={className}
      alt="leftButton"
      src="/images/icons/chevron-left-solid.svg"
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
    <StSlider {...settings}>
      {categories.map(category => {
        return <Category key={category.id} category={category} />;
      })}
    </StSlider>
  );
};

export default Paging;
