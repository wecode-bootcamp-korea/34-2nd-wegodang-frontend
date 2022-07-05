import styled from 'styled-components';

export const SignUpAfterContainerBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const SignUpAfterContainer = styled.div`
  margin: 100px 200px;
  height: 100%;
  text-align: left;
  max-width: 400px;
`;

export const Text = styled.p`
  font-size: ${props => `${props.fontSize || 15}px`};
  font-weight: ${props => props.fontWeight || 400};
  margin-left: ${props => `${props.marginLeft || 0}px`};
  margin-top: 20px;
`;

export const Span = styled.span`
  font-size: ${props => `${props.fontSize || 10}px`};
  font-weight: ${props => props.fontWeight || 400};
`;

export const UserInfoContainer = styled.div``;

export const Input = styled.input`
  /* ${props => props.type}; */
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0px;
  border: 1px solid lightgray;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  text-align: center;
  width: 100%;
  background-color: #00c4c4;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 15px;
  margin-top: 20px;
  font-weight: 700;
  transition: all 0.2s;
  &:disabled {
    opacity: 0.5;
  }
`;

export const Label = styled.label`
  display: flex;
`;
