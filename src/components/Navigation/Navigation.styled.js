import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px 100px;
  height: 60px;
`;

export const Logo = styled(Link)`
  font-size: 30px;
  font-family: 'Poppins', sans-serif;
  flex: 1;
`;

export const WrapperSearch = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  height: 100%;
`;

export const SearchBarForm = styled.form`
  position: relative;
  border: 1px solid #58c1c2;
  height: 40px;
  width: 320px;
  border-radius: 20px;
  font-size: 20px;
  padding: 0 40px;
`;

export const SearchIcon = styled.img`
  position: absolute;
  width: 20px;
  left: 15px;
  top: 10px;
`;

export const SearchBar = styled.input`
  height: 100%;
  width: 100%;
  border: 0;
  font-size: 20px;
  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 17px;
  }
`;

export const WrapperUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  height: 100%;
`;

export const UserLink = styled(Link)`
  margin: 15px;
  color: #777b7e;
`;

export const ProjectButton = styled.button`
  margin: 15px;
  padding: 7px 15px;
  border: 1px solid #58c1c2;
  border-radius: 4px;
  background-color: inherit;
  color: #58c1c2;
  font-size: 17px;
`;

export const Logout = styled.button`
  padding: 7px 15px;
  border: 1px solid #ff5b5b;
  border-radius: 4px;
  background-color: inherit;
  color: #ff5b5b;
  font-size: 17px;
  margin-left: 20px;
`;

export const UserIcon = styled.img`
  width: 30px;
  height: 30px;
  background-color: #8be4e4;
  color: #cbf7f7;
  border-radius: 50%;
`;
