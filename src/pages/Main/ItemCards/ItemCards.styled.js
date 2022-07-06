import styled from 'styled-components';

export const WrapperCards = styled.section`
  display: grid;
  grid-template-columns: repeat(3, calc(33.33333% - 30px));
  grid-row-gap: 40px;
  grid-column-gap: 40px;
  width: 1000px;
  padding: 30px 0;
`;
