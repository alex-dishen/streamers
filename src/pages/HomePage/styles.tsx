import styled from 'styled-components';

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  gap: 50px;
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

export const ListWrapper = styled.div`
  width: 100%;
`;

export const Hr = styled.hr`
  width: 100%;
`;
