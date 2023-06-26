import styled, { css } from 'styled-components';

export const Star = styled.span(
  ({ theme }) => css`
    color: ${theme.colors.red[200]};
  `,
);

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
