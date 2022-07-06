import React from 'react';
import ItemCards from './ItemCards/ItemCards';
import * as S from './Main.styled';
import useFetch from '../../hooks/useFetch';
import HttpClient from '../../services/wecode';

const httpClient = new HttpClient(process.env.REACT_APP_LOCAL_URL);

const Main = () => {
  const {
    loading,
    error,
    payload: { products },
  } = useFetch({
    httpClient,
    url: `/products/list`,
  });

  if (loading) return <p>Loadding</p>;

  if (error) return <p>{error}</p>;

  return (
    <S.WrapperMain>
      <ItemCards fundItems={products} />
    </S.WrapperMain>
  );
};

export default Main;
