import React from 'react';
import * as S from './SingIn.styled';

const SignIn = props => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = 'http://localhost:3000/sign-in';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  return (
    <S.LoginContainer>
      <S.LoginWrapper>
        <S.LoginTitle>wegodang</S.LoginTitle>
        <S.LoginTitle fontSize="60" marginBottom="70">
          로그인
        </S.LoginTitle>
        <S.LoginImg src="./images/SignInImages/btnG_완성형.png" alt="네이버" />
        <a href={KAKAO_AUTH_URL}>
          <S.LoginImg
            src="./images/SignInImages/kakao_login_large_narrow.png"
            alt="카카오"
            href="/sign-up"
          />
        </a>
        <S.LoginImg src="./images/SignInImages/apple_login.png" alt="애플" />
        <S.LoginDivLink href="/sign-up">
          회원가입이 필요하신가요?
        </S.LoginDivLink>
      </S.LoginWrapper>
    </S.LoginContainer>
  );
};

export default SignIn;
