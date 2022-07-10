import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cards = [
  {
    id: 1,
    title: '짱짱한',
    subtitle: '썬크림',
    url: 'https://cdn1.wadiz.kr/images/20220629/1656487305997.png/wadiz/optimize&quot;',
  },
  {
    id: 2,
    title: '초각성',
    subtitle: '콜드브루',
    url: 'https://cdn.wadiz.kr/ft/images/green001/2022/0705/20220705184832510_5687.jpg/wadiz/optimize/&quot;',
  },
  {
    id: 3,
    title: '시원한',
    subtitle: '바지',
    url: 'https://cdn.wadiz.kr/ft/images/green001/2022/0628/20220628152133737_5649.jpg/wadiz/optimize/&quot;',
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{
        ...style,
        position: 'absolute',
        top: '700px',
        left: '1950px',
        display: 'block',
        background: 'black',
        opacity: '0.7',
        width: '25px',
        height: '25px',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{
        ...style,
        position: 'absolute',
        left: '1900px',
        top: '700px',
        display: 'block',
        background: 'black',
        opacity: '0.7',
        width: '25px',
        height: '25px',
      }}
      onClick={onClick}
    />
  );
}

const SimpleSlider = () => {
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
    <Container>
      <SlickSlide>
        <Slider {...settings}>
          {cards.map(card => {
            return (
              <CardsContainer key={card.id}>
                <ImageContainer>
                  <Image src={card.url} />
                </ImageContainer>
                <Subscribe>
                  <Title>{card.title}</Title>
                  <SubTitle>{card.subtitle}</SubTitle>
                </Subscribe>
              </CardsContainer>
            );
          })}
        </Slider>
      </SlickSlide>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const SlickSlide = styled.div`
  width: 100%;
`;
const ImageContainer = styled.div``;
const Image = styled.img``;
const Subscribe = styled.div`
  margin-left: 50px;
`;
const Title = styled.div`
  position: absolute;
  bottom: 35%;
  color: rgb(255, 255, 255);
  font-size: 100px;
  font-weight: 500;
`;
const SubTitle = styled.div`
  position: absolute;
  bottom: 20%;
  color: rgb(255, 255, 255);
  font-size: 30px;
  font-weight: 500;
`;
const CardsContainer = styled.div``;

const Arrow = styled.div`
  z-index: 10;
`;

export default SimpleSlider;
