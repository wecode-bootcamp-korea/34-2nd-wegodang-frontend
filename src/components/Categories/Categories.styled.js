import Slider from 'react-slick';
import styled from 'styled-components';

export const StSlider = styled(Slider)`
  position: relative;
  width: 1000px;
  margin-bottom: 20px;
`;

export const Arrow = styled.img`
  position: absolute;
  top: 50px;
  width: 25px;
  height: 25px;
  display: block;

  &.slick-prev {
    left: -20px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }

  &.slick-next {
    right: -20px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
`;
