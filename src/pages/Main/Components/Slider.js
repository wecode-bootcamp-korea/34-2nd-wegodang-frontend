import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './Slider.styled';

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <S.Arrow className={className} onClick={onClick} />;
}

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <S.Arrow className={className} onClick={onClick} />;
}

const SimpleSlider = ({ fundItems }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <S.Container>
      <S.SlickSlide>
        <Slider {...settings}>
          {fundItems.map(card => {
            return (
              <S.CardsContainer key={card.product_id}>
                <S.ImageContainer>
                  <S.Image src={card.image_url} />
                </S.ImageContainer>
                <S.Subscribe>
                  <S.Title>{card.slide_title}</S.Title>
                  <S.SubTitle>{card.slide_subtitle}</S.SubTitle>
                </S.Subscribe>
              </S.CardsContainer>
            );
          })}
        </Slider>
      </S.SlickSlide>
    </S.Container>
  );
};

export default SimpleSlider;
