import React from 'react';
import styled from 'styled-components';

const Category = ({ category }) => {
  return (
    <WrapperCategory>
      <ImageBox>
        <CategoryImage src={category.image_url} />
      </ImageBox>
      <TitleBox>
        <CategoryTitle>{category.title}</CategoryTitle>
      </TitleBox>
    </WrapperCategory>
  );
};
const WrapperCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
const ImageBox = styled.div``;
const TitleBox = styled.div``;
const CategoryImage = styled.img`
  margin-top: 8px;
  height: 50px;
  border-radius: 50%;
`;
const CategoryTitle = styled.div`
  font-size: 13px;
`;

export default Category;
