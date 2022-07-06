import React from 'react';
import * as S from './ItemCard.styled';
import Text from '../../../components/Text/Text';
import { Line } from 'rc-progress';

const ItemCard = ({ fundItem }) => {
  return (
    <S.WrapperCard>
      <S.ImageBox>
        <S.CardImage src={fundItem.image_url} />
      </S.ImageBox>
      <S.WrapperInfo>
        <S.WrapperTitle>
          <Text fontSize={16} fontWeight="bold">
            {fundItem.product_name}
          </Text>
        </S.WrapperTitle>
        <S.WrapperUserInfo>
          <Text fontSize={14} fontWeight="bold">
            {fundItem.category_name} | {fundItem.user}
          </Text>
        </S.WrapperUserInfo>
        <Line
          percent={fundItem.goal_percent}
          trailWidth="2"
          strokeWidth="2"
          strokeColor="#00B2B2"
        />
        <S.WrapperGoal>
          <S.WrapperGoalPercent>
            <Text fontSize={17} fontWeight="bold">
              {fundItem.goal_percent}%
            </Text>
          </S.WrapperGoalPercent>
          <S.WrapperGoalOther>
            <Text fontSize={14} fontWeight="bold">
              {fundItem.goal_price.toLocaleString('ko-KR')}원
            </Text>
            <Text fontSize={14} fontWeight="bold">
              {fundItem.remaining_days}일 남음
            </Text>
          </S.WrapperGoalOther>
        </S.WrapperGoal>
      </S.WrapperInfo>
    </S.WrapperCard>
  );
};

export default ItemCard;
