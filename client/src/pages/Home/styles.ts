import styled from 'styled-components';
import { FlexColumn } from 'styles';

export const HomePageWrapper = styled(FlexColumn)`
  align-items: normal;
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

export const ListWrapper = styled(FlexColumn)`
  align-items: flex-start;
  gap: 15px;
  width: 100%;
`;
