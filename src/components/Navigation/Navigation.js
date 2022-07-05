import React from 'react';
import * as S from './Navigation.styled';

const Navigation = props => {
  return (
    <S.Wrapper>
      <S.Logo>Wadiz</S.Logo>
      <S.WrapperSearch>
        <S.SearchBarForm>
          <S.SearchIcon alt="돋보기" src="/images/icons/search.png" />
          <S.SearchBar placeholder="어떤 프로젝트를 찾고 계신가요?" />
        </S.SearchBarForm>
      </S.WrapperSearch>
      <S.WrapperUser>
        <S.UserLink to="/">로그인</S.UserLink>
        <S.UserLink to="/">회원가입</S.UserLink>
        <S.ProjectButton>프로젝트 오픈 신청</S.ProjectButton>
      </S.WrapperUser>
    </S.Wrapper>
  );
};

export default Navigation;
