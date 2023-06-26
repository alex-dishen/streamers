import styled, { css } from 'styled-components';

export const PopUpWrapper = styled.div(
  ({ theme }) => css`
    position: fixed;
    bottom: 30px;
    left: 50%;
    padding: 15px 20px;
    border-radius: 10px;
    transform: translateX(-50%);
    background-color: rgba(255, 0, 0, 0.6);
    color: ${theme.colors.red[50]};
    backdrop-filter: blur(5px);
  `,
);
