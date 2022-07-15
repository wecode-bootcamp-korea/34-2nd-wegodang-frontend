import React from 'react';
import * as S from './Navigation.styled';
import { useRecoilState } from 'recoil';
import userInfo from '../../atom/userInfo';
import Text from '../../components/Text/Text';

const Navigation = props => {
  const [userInfos, setUserInfos] = useRecoilState(userInfo);

  const hendleLogout = () => {
    setUserInfos({
      token: '',
      email: '',
      kakaoId: '',
      userName: '',
    });
  };

  return (
    <S.Wrapper>
      <S.Logo to="/">Wegodang</S.Logo>
      <S.WrapperSearch>
        <S.SearchBarForm>
          <S.SearchIcon alt="돋보기" src="/images/icons/search.png" />
          <S.SearchBar placeholder="어떤 프로젝트를 찾고 계신가요?" />
        </S.SearchBarForm>
      </S.WrapperSearch>
      <S.WrapperUser>
        {userInfos.token === '' ? (
          <>
            <S.UserLink to="/sign-in">로그인</S.UserLink>
            <S.UserLink to="/sign-up">회원가입</S.UserLink>
          </>
        ) : (
          <>
            <S.UserIcon src="/images/icons/user-solid.svg" />
            <S.Logout onClick={hendleLogout}>로그아웃</S.Logout>
          </>
        )}

        <S.ProjectButton>프로젝트 오픈 신청</S.ProjectButton>
      </S.WrapperUser>
    </S.Wrapper>
  );
};

export default Navigation;
