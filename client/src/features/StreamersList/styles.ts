import styled from 'styled-components';

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
  gap: 15px;
  min-height: 180px;
  width: 100%;
  list-style: none;
`;
