import styled from 'styled-components';

export const WrapperCard = styled.article`
  display: flex;
  flex-direction: column;
  height: 330px;
  width: 100%;
  padding-bottom: 20px;
`;

export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 170px;
  overflow: hidden;
  border-radius: 5px;
`;

export const CardImage = styled.img`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const WrapperTitle = styled.div`
  padding: 15px 0;
  height: 67px;
  width: 100%;
  line-height: 22px;
`;

export const WrapperUserInfo = styled.div`
  height: 20px;
  color: #90949c;
  margin-bottom: 12px;
`;

export const WrapperGoal = styled.div`
  display: flex;
  height: 20px;
  margin-top: 5px;
`;

export const WrapperGoalPercent = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 5px;
  color: #00b2b2;
`;

export const WrapperGoalOther = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1;
  color: #90949c;
`;
