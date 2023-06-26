import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const SorryWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Text = styled.p(
  ({ theme }) => css`
    font-weight: 200;
    font-size: ${theme.fontSizes.lg};
    text-align: center;
  `,
);

export const StyledLink = styled(Link)(
  ({ theme }) => css`
    color: ${theme.colors.gray[400]};
    font-size: ${theme.fontSizes.xs};
    text-decoration: none;
    transition: 300ms;

    &:hover {
      color: white;
    }
  `,
);
