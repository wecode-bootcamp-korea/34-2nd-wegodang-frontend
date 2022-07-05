import styled from 'styled-components';

export const Wrapper = styled.footer`
  height: 400px;
  background-color: aliceblue;
`;

export const WrapperMenu = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 8px 80px;
  border-bottom: 1px solid #e6eaed;
  border-top: 1px solid #e6eaed;
`;

export const Menus = styled.footer`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #2c2c2c;
`;

export const Menu = styled.footer`
  margin: 0 10px;
`;

export const WrapperBottom = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 20px 80px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90px;
`;

export const SupportButton = styled.button`
  width: 180px;
  height: 46px;
  border: none;
  border-radius: 23px;
  background-color: #212529;
  color: white;
  font-size: 17px;
`;

export const CallCenters = styled.div`
  display: flex;
`;

export const CallCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 30px;
  height: 50px;
  &:first-child {
    border-right: 1px solid #dee2e6;
  }
`;

export const Text = styled.p`
  ${({ fontSize, fontWeight }) =>
    `font-size: ${fontSize ? fontSize : 15}px; 
    font-weight: ${fontWeight === 'bold' ? 700 : 400}`}
`;

export const WrapperEmails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px 0;
  height: 90px;
`;

export const WrapperDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
`;

export const WrapperApplication = styled.div`
  display: flex;
  padding: 40px 80px;
`;
export const Application = styled.div`
  width: 100px;
  text-align: center;
`;
