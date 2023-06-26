import styled, { css } from 'styled-components';
import { FlexColumn } from 'styles';

export const HomePageWrapper = styled(FlexColumn)`
  align-items: normal;
  margin: 0 auto;
  gap: 50px;
  width: clamp(250px, 80vw, 900px);
`;

export const Header = styled(FlexColumn)(
  ({ theme }) => css`
    gap: 20px;

    h1 {
      font-size: ${theme.fontSizes.xl};
      font-weight: 300;
      text-align: center;
    }

    p {
      color: ${theme.colors.gray[400]};
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      h1 {
        font-size: ${theme.fontSizes.lg};
      }
    }
  `,
);

export const ListWrapper = styled(FlexColumn)`
  align-items: flex-start;
  gap: 15px;
  width: 100%;
`;
