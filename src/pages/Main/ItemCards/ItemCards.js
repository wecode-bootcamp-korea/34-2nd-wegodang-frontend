import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import * as S from './ItemCards.styled';

const ItemCards = ({ fundItems }) => {
  return (
    <S.WrapperCards>
      {fundItems.map(fundItem => {
        return <ItemCard key={fundItem.product_id} fundItem={fundItem} />;
      })}
    </S.WrapperCards>
  );
};

export default ItemCards;
