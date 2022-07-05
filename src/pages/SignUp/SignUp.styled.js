import styled from 'styled-components';

export const SignUpBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 300px 0px;
  height: 100%;
`;

export const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 16px;
  width: 450px;
  height: 537px;
  margin-right: 30px;
`;

export const TextContainer = styled.div`
  text-align: center;
  height: 50%;
`;

export const IconContainer = styled.div`
  height: 50%;
`;

export const Text = styled.p`
  font-weight: ${props => props.fontWeight || 400};
  margin-top: 30px;
  font-size: ${props => `${props.fontSize || 15}px`};
`;

export const KakaoSignUpBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 40px 10px;
`;

export const SocialLoginImageBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  overflow: hidden;
`;

export const SocialLoginImageLink = SocialLoginImageBox.withComponent('a');

export const SocialLoginImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const IsAlreadyLogin = styled.div`
  text-align: center;
`;

export const AdImage = styled.img`
  border-radius: 20px;
`;
