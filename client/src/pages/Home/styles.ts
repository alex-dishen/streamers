import styled from 'styled-components';

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 50px;
  width: clamp(500px, 60vw, 900px);
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
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;
