import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 380px;
  position: relative;
  margin-bottom: 50px;
`;

export const SlickSlide = styled.div`
  width: 100%;

  .slick-dots {
    bottom: 15px;
  }
`;

export const ImageContainer = styled.div`
  height: 380px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Subscribe = styled.div`
  margin-left: 50px;
`;

export const Title = styled.div`
  position: absolute;
  bottom: 35%;
  color: rgb(255, 255, 255);
  font-size: 50px;
  font-weight: 500;
  text-shadow: 3px 3px rgba(0, 0, 0, 0.5);
`;

export const SubTitle = styled.div`
  position: absolute;
  bottom: 22%;
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: 500;
  text-shadow: 3px 3px rgba(0, 0, 0, 0.5);
`;

export const CardsContainer = styled.div`
  height: 100%;
`;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 90%;
  color: black;
  background-color: rgba(0, 0, 0, 0.7);
  width: 40px;
  height: 40px;

  &.slick-prev {
    left: 85%;

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }

  &.slick-next {
    left: calc(85% + 40px);
    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }

  z-index: 1;
`;
