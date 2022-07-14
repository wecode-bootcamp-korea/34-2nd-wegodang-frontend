import React, { useCallback, useEffect, useState } from 'react';
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
    params: { offset: 0, limit: ITEM_CARD_LOAD_COUNT },
  });

  const [moreProducts, setMoreProduct] = useState([]);
  const [isNewLoad, setIsNewLoad] = useState(false);

  const infiniteScroll = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    const isLoadNewData = scrollHeight - 400 < scrollTop + clientHeight;

    if (isNewLoad || !isLoadNewData) return;
    setIsNewLoad(true);
  }, [isNewLoad]);

  const loadNewData = useCallback(async () => {
    const { data } = await httpClient.getData('/products', {
      offset:
        (moreProducts.length / ITEM_CARD_LOAD_COUNT + 1) * ITEM_CARD_LOAD_COUNT,
      limit: ITEM_CARD_LOAD_COUNT,
    });

    setMoreProduct(preventData => [...preventData, ...data.products]);
    setIsNewLoad(false);
  }, [moreProducts.length]);

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infiniteScroll]);

  useEffect(() => {
    if (!isNewLoad) return;
    loadNewData();
  }, [isNewLoad, loadNewData]);

  if (loading) return <p>Loadding</p>;
  if (error) return <p>{error}</p>;
  return (
    <S.WrapperMain>
      <SimpleSlider />
      <Paging categories={CATEGORIES} />
      <ItemCards fundItems={[...payload.products, ...moreProducts]} />
    </S.WrapperMain>
  );
};

const ITEM_CARD_LOAD_COUNT = 12;

export default Main;
