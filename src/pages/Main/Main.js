import React from 'react';
import ItemCards from './ItemCards/ItemCards';
import * as S from './Main.styled';
import useFetch from '../../hooks/useFetch';
import HttpClient from '../../services/wecode';
import SimpleSlider from './Components/Slider';

const httpClient = new HttpClient(process.env.REACT_APP_LOCAL_URL);

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
      <ItemCards fundItems={payload.products} />
    </S.WrapperMain>
  );
};

export default Main;
