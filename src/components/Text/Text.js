import React from 'react';
import * as S from './Text.styled';

const Text = ({ children, fontSize, fontWeight }) => {
  return (
    <S.Text fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </S.Text>
  );
};

export default Text;
