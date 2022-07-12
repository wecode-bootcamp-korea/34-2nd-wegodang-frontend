import styled from 'styled-components';

export const DetailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DetailHeader = styled.div`
  text-align: center;
  width: 100%;
  height: 205px;
  margin: 20px 0px;
  padding: 50px 0px;
  background-color: #333333;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const SubTitle = styled.p`
  color: #5cdede;
  font-weight: 700;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 700;
`;

export const InformationContainer = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
`;

export const ItemContainer = styled.div`
  flex: 1;
  padding: 20px 50px;
`;

export const ItemDetailContainer = styled.div``;

export const FundingContainer = styled.div`
  width: 350px;
  margin-left: 50px;
`;

export const FundingInfo = styled.div`
  width: 80%;
  margin: 30px 0px;
  font-weight: 700;
  color: #4a4a4a;
  font-size: ${props => `${props.fontSize || 21}px`};
`;

export const FundingButtonContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
`;
export const FundingButton = styled.button`
  width: 100%;
  border-radius: 2px;
  border: none;
  font-size: 15px;
  padding: 8px;
  margin: 0px ${props => `${props.rightLeft || 0}px`};
`;

export const BookingButton = styled(FundingButton)`
  background-color: #03c4c4;
  padding: 20px;
  font-size: 20px;
  color: white;
  border-radius: 5px;
`;

export const ButtonOtherBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0px;
  padding: 40px;
  padding-bottom: 100%;
  background-color: pink;
  overflow: hidden;
`;

export const ButtonImage = styled.img`
  width: 15%;
  margin-right: 5px;
`;

export const ItemMainImage = styled.img`
  position: absolute;
  top: 50%;
  left: 0%;
  width: 100%;
  height: auto;
  transform: translateY(-50%);
  overflow: fill;
`;

export const ItemDescriptipn = styled.div`
  font-size: 30px;
  font-weight: 700;
  text-align: left;
  margin: 30px 0px;
  margin-bottom: 40px;
`;

export const ItemMainFundingBox = styled.div`
  background-color: #ebf9f9;
  padding: 30px;
`;

export const MainFundingP = styled.p`
  font-size: ${props => `${props.fontSize || 20}px`};
  margin: 15px 0px;
  color: #00b2b2;
`;

export const ProjectStoryContainer = styled.div`
  font-size: ${props => `${props.fontSize || 20}px`};
  padding: 40px;
  height: auto;
  text-align: center;
`;

export const ProjectStory = styled.div`
  width: 100%;
  padding: 20px;
  overflow: hidden;
`;

export const ProjectStoryImage = styled.img`
  width: 100%;
`;
