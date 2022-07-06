import React from 'react';
import * as S from './Text.styled';

const Text = ({ children, fontSize, fontWeight }) => {
  return (
    <S.StText fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </S.StText>
  );
};

export default Text;
