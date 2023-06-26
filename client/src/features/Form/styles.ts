import styled, { css } from 'styled-components';
import { FlexColumn } from 'styles';

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  padding: 30px 20px;
  box-shadow: 0 0 10px 1px rgb(56, 165, 255);
  border-radius: 20px;
`;

export const FormBody = styled(FlexColumn)`
  gap: 30px;
  width: min(450px, 90%);
`;

export const FormTop = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;

    @media (max-width: ${theme.breakpoints.md}) {
      flex-direction: column;
    }
  `,
);

export const SubmitButton = styled.button(
  ({ theme }) => css`
    padding: 10px 30px;
    background-color: ${theme.colors.blue[600]};
    border-radius: 10px;
    font-weight: 600;
  `,
);
