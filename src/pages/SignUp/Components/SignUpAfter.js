import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './SignUpAfter.styled';

const SignUpAfter = () => {
  const location = useLocation();
  const { id, name, email } = location.state;
  const [buttonDisable, setButtonDisable] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: id,
    name: name,
    email: email,
  });

  const navigate = useNavigate();
  const handleUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo(before => ({ ...before, [name]: value }));
  };
  const signUpSuccess = result => {
    localStorage.setItem('login-token', result.ACCESS_TOKEN);
    alert('회원가입 완료');
    navigate('/sign-in');
  };
  const signUpOverLap = () => {
    navigate('sign-in');
    alert('계정이 이미 있습니다');
  };
  const handleSubmit = () => {
    fetch('http://3.39.233.205:8000/users/kakao', {
      method: 'POST',
      body: JSON.stringify({
        kakao_id: userInfo.id,
        user_name: userInfo.name,
        email: userInfo.email,
      }),
    })
      .then(res => res.json())
      .then(result => {
        result.message === 'CREATE_ACCOUNT'
          ? signUpSuccess(result)
          : signUpOverLap();
      });
  };

  return (
    <S.SignUpAfterContainerBox>
      <S.SignUpAfterContainer>
        <S.Text fontSize={40} fontWeight="bold">
          회원가입
        </S.Text>
        <S.Text>최소한의 정보를 받고있습니다.</S.Text>
        <S.UserInfoContainer>
          <S.Text>이름</S.Text>
          <S.Input
            name="name"
            placeholder={userInfo.name || '이름'}
            onChange={handleUserInfo}
          />
          <S.Text>사용중인 이메일이 맞으신가요?</S.Text>
          <S.Input
            name="email"
            placeholder={userInfo.email || 'email'}
            onChange={handleUserInfo}
          />
          <S.Text>
            해당 이메일로 알림 및 펀딩 관련 안내가 발송됩니다.
            <br />
            사용하는 이메일이 아닌 경우, 변경하시기 바랍니다.
          </S.Text>
          <S.Label>
            <input
              type="checkbox"
              onClick={() => setButtonDisable(!buttonDisable)}
            />
            <S.Text marginLeft={15}>
              <S.Span fontSize={18} fontWeight="bold">
                전체동의{' '}
              </S.Span>
              <br />
              <S.Span fontSize={8}>
                펀딩 스토어 회원 서비스 (필수),투자 서비스(선택), 스타트업찾기{' '}
                <br /> 서비스(선택), 이벤트 혜택알림 동의(선택)
              </S.Span>
            </S.Text>
          </S.Label>

          <S.Button
            type="button"
            disabled={!buttonDisable}
            onClick={handleSubmit}
          >
            완료
          </S.Button>
        </S.UserInfoContainer>
      </S.SignUpAfterContainer>
    </S.SignUpAfterContainerBox>
  );
};

export default SignUpAfter;
