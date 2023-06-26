import styled, { css } from 'styled-components';

export const Text = styled.p(
  ({ theme }) => css`
    color: ${theme.colors.red[200]};
    text-align: center;
  `,
);
