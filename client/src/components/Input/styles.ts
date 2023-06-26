import styled from 'styled-components';
import { FlexColumn } from 'styles';

export const InputWrapper = styled(FlexColumn)`
  align-items: flex-start;
  gap: 10px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  background-color: transparent;
  border: 1px solid rgb(37, 37, 37);
  color: white;
  border-radius: 10px;
  outline: none;
`;
