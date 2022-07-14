import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Category = ({ category }) => {
  return (
    <WrapperCategory to={`/${category.id}`}>
      <ImageBox>
        <CategoryImage src={category.image} />
      </ImageBox>
      <TitleBox>
        <CategoryTitle>{category.name}</CategoryTitle>
      </TitleBox>
    </WrapperCategory>
  );
};
const WrapperCategory = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
const ImageBox = styled.div``;
const TitleBox = styled.div``;
const CategoryImage = styled.img`
  margin: 10px 0;
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;
const CategoryTitle = styled.div`
  font-size: 13px;
`;

export default Category;
