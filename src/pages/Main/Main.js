import React from 'react';
import ItemCards from './ItemCards/ItemCards';
import * as S from './Main.styled';
import useFetch from '../../hooks/useFetch';
import HttpClient from '../../services/wecode';
import SimpleSlider from './Components/Slider';
import Paging from '../../components/Categories/Categories';

const httpClient = new HttpClient(process.env.REACT_APP_BASE_URL);

const Main = () => {
  const { loading, error, payload } = useFetch({
    httpClient,
    url: `/products`,
  });

  if (loading) return <p>Loadding</p>;
  if (error) return <p>{error}</p>;
  return (
    <S.WrapperMain>
      <SimpleSlider />
      <Paging categories={CATEGORIES} />
      <ItemCards fundItems={payload.products} />
    </S.WrapperMain>
  );
};

const CATEGORIES = [
  {
    id: 1,
    image_url:
      'https://cdn.wadiz.kr/ft/images/green001/2022/0711/20220711111005281_null.jpg',
    title: '펀딩야시장',
  },
  {
    id: 2,
    image_url:
      'https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_287.jpg',
    title: '테크.가전',
  },
  {
    id: 3,
    image_url:
      'https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_288.jpg',
    title: '패션.잡화',
  },
  {
    id: 4,
    image_url:
      'https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_311.jpg',
    title: '뷰티',
  },
  {
    id: 5,
    image_url:
      'https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_289.jpg',
    title: '푸드',
  },
  {
    id: 6,
    image_url:
      'https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_310.jpg',
    title: '홈.리빙',
  },
  {
    id: 7,
    image_url:
      'https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_296.jpg',
    title: '여행.레저',
  },
  {
    id: 8,
    image_url:
      'https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_297.jpg',
    title: '스포츠.모빌리티',
  },
  {
    id: 9,
    image_url:
      'https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_character.jpg',
    title: '캐릭터.굿즈',
  },
  {
    id: 10,
    image_url:
      'https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_309.jpg',
    title: '베이비.키즈',
  },
  {
    id: 11,
    image_url:
      'https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_308.jpg',
    title: '반려동물',
  },
  {
    id: 12,
    image_url:
      'https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_292.jpg',
    title: '게임.취미',
  },
  {
    id: 13,
    image_url:
      'https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_294.jpg',
    title: '컬쳐.아티스트',
  },
  {
    id: 14,
    image_url:
      'https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_316.jpg',
    title: '클래스.컨설팅',
  },
  {
    id: 15,
    image_url:
      'https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_293.jpg',
    title: '출판',
  },
  {
    id: 16,
    image_url:
      'https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_295.jpg',
    title: '소셜.캠페인',
  },
  {
    id: 17,
    image_url:
      'https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_312.jpg',
    title: '기부.후원',
  },
  {
    id: 18,
    image_url:
      'https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_313.jpg',
    title: '모임',
  },
];

export default Main;
