import styled from 'styled-components';

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h1 {
    font-size: 46px;
    font-weight: 300;
  }

  p {
    color: #777777;
  }
`;
