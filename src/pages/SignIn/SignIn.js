import React from 'react';
import * as S from './SingIn.styled';

const SignIn = props => {
  return (
    <S.LoginContainer>
      <S.LoginWrapper>
        <S.LoginTitle>wegodang</S.LoginTitle>
        <S.LoginTitle fontSize="60" marginBottom="70">
          로그인
        </S.LoginTitle>
        <S.LoginImg src="./images/SignInImages/btnG_완성형.png" alt="네이버" />
        <S.LoginImg
          src="./images/SignInImages/kakao_login_large_narrow.png"
          alt="카카오"
        />
        <S.LoginImg src="./images/SignInImages/apple_login.png" alt="애플" />
        <S.LoginDivLink href="/sign-up">
          회원가입이 필요하신가요?
        </S.LoginDivLink>
      </S.LoginWrapper>
    </S.LoginContainer>
  );
};

export default SignIn;
