import React from 'react';
import { useParams } from 'react-router-dom';
import { Line } from 'rc-progress';
import * as S from './Detail.styled';
import useFetch from '../../hooks/useFetch';
import HttpClient from '../../services/wecode';
import heartImage from '../../assets/icons/heart.png';
import interviewImage from '../../assets/icons/interview.png';

const httpClient = new HttpClient(process.env.REACT_APP_LOCAL_URL);

const Detail = () => {
  const params = useParams();
  const { loading, payload } = useFetch({
    httpClient,
    url: `/products/${params.id}`,
  });
  if (loading) return <p>loading..</p>;

  const {
    category_name,
    product_name,
    image_url,
    story,
    goal_price,
    start_date,
    end_date,
    remaining_days,
    goal_percent,
    total_price,
    suppoters,
  } = payload.products;

  return (
    <S.DetailPageContainer>
      <S.DetailHeader>
        <S.SubTitle>{category_name}</S.SubTitle>
        <S.Title>{product_name}</S.Title>
      </S.DetailHeader>
      <S.InformationContainer>
        <S.ItemContainer>
          <S.ItemDetailContainer>
            <S.ImageContainer>
              <S.ItemMainImage src={image_url[0].url} alt="메인 상품 이미지" />
            </S.ImageContainer>
            <S.ItemDescriptipn>{story}</S.ItemDescriptipn>
            <S.ItemMainFundingBox>
              <S.MainFundingP>
                {' '}
                목표 금액 {goal_price.toLocaleString()}원
              </S.MainFundingP>
              <S.MainFundingP>
                펀딩 기간 {start_date} ~ {end_date}
              </S.MainFundingP>
              <S.MainFundingP fontSize={15}>
                100% 이상 모이면 펀딩이 성공되며, 펀딩 마감일까지 목표 금액이
                100% 모이지 않으면 결제가 진행되지 않습니다.
              </S.MainFundingP>
            </S.ItemMainFundingBox>
          </S.ItemDetailContainer>
          <S.ProjectStoryContainer fontSize={30}>
            프로젝트 스토리
            <S.ProjectStory>
              <S.ProjectStoryImage
                src={image_url[3].url}
                alt="메인 상품 이미지"
              />
            </S.ProjectStory>
            <S.ProjectStory>
              <S.ProjectStoryImage
                src={image_url[2].url}
                alt="메인 상품 이미지"
              />
            </S.ProjectStory>
            <S.ProjectStory>
              <S.ProjectStoryImage
                src={image_url[1].url}
                alt="메인 상품 이미지"
              />
            </S.ProjectStory>
          </S.ProjectStoryContainer>
        </S.ItemContainer>
        <S.FundingContainer>
          <S.FundingInfo fontSize={27}>
            {' '}
            {remaining_days} 일 남음{' '}
          </S.FundingInfo>
          <Line
            percent={goal_percent}
            trailWidth="1"
            strokeWidth="1"
            strokeColor="#00B2B2"
          />
          <S.FundingInfo>
            {' '}
            {(goal_price / total_price) * 1000}% 달성
          </S.FundingInfo>
          <S.FundingInfo> {total_price.toLocaleString()}원 펀딩</S.FundingInfo>
          <S.FundingInfo>{suppoters} 명의 서포터</S.FundingInfo>
          <S.FundingButtonContainer>
            <S.BookingButton padding={20} fontSize={20}>
              {' '}
              예약 주문하기
            </S.BookingButton>
          </S.FundingButtonContainer>
          <S.ButtonOtherBox>
            <S.FundingButton>
              {' '}
              <S.ButtonImage src={heartImage} alt="heart" /> 705
            </S.FundingButton>
            <S.FundingButton rightLeft={5}>
              {' '}
              <S.ButtonImage src={interviewImage} alt="interview" />
              문의
            </S.FundingButton>
            <S.FundingButton> 공유하기</S.FundingButton>
          </S.ButtonOtherBox>
        </S.FundingContainer>
      </S.InformationContainer>
    </S.DetailPageContainer>
  );
};

export default Detail;
