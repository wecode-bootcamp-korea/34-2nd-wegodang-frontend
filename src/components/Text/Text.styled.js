import styled from 'styled-components';

export const Text = styled.p`
  ${({ fontSize, fontWeight }) =>
    `font-size: ${fontSize ? fontSize : 15}px; 
    font-weight: ${fontWeight === 'bold' ? 700 : 400}`}
`;
