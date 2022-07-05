import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './SignUp.styled';

const SignUp = props => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = 'http://localhost:3000/oauth';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <S.SignUpBox>
      <S.SocialLoginContainer>
        <S.TextContainer>
          <S.Text fontSize={30} fontWeight={700}>
            회원가입
          </S.Text>
          <S.Text>
            와디즈 신규회원 가입하고 <br /> 다양한 혜택을 받아보세요
          </S.Text>
        </S.TextContainer>
        <S.IconContainer>
          <S.KakaoSignUpBox>
            <S.SocialLoginImageLink href={KAKAO_AUTH_URL}>
              <S.SocialLoginImage
                src="./images/SignUpImages/kakao.png"
                alt="카카오"
              />
            </S.SocialLoginImageLink>
            <S.SocialLoginImageBox>
              <S.SocialLoginImage
                src="./images/SignUpImages/naver.png"
                alt="네이버"
              />
            </S.SocialLoginImageBox>
            <S.SocialLoginImageBox>
              <S.SocialLoginImage
                src="./images/SignUpImages/apple.png"
                alt="애플"
              />
            </S.SocialLoginImageBox>
          </S.KakaoSignUpBox>
          <S.IsAlreadyLogin>
            이미 와디즈 계정이 있나요? <Link to="/sign-in">로그인</Link>
          </S.IsAlreadyLogin>
        </S.IconContainer>
      </S.SocialLoginContainer>
      <div>
        <S.AdImage
          src="./images/SignUpImages/wadizSignup.PNG"
          alt="펀딩&스토어 최대 20000원 혜택"
        />
      </div>
    </S.SignUpBox>
  );
};

export default SignUp;
