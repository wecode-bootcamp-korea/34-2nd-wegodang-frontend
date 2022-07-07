import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 100px 0px;
  width: 350px;
`;
export const LoginTitle = styled.div`
  text-align: center;
  font-weight: 900;
  font-size: ${props => `${props.fontSize || 30}px`};
  margin: 20px 0px;
  margin-bottom: ${props => `${props.marginBottom || 0}px`};
`;
export const LoginDiv = styled.div`
  margin-top: 45px;
  font-size: 20px;
  font-weight: 700;
`;
export const LoginImg = styled.img`
  width: 100%;
  height: 50px;
  object-fit: cover;
  margin-top: 10px;
  border-radius: 9px;
`;
export const LoginDivLink = LoginDiv.withComponent('a');
