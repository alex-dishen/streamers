import styled from 'styled-components';
import { FlexColumn } from 'styles';

export const TextAreaWrapper = styled(FlexColumn)`
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

export const StyledTextArea = styled.textarea`
  height: 240px;
  width: 100%;
  padding: 12px 20px;
  background-color: transparent;
  color: white;
  border: 1px solid rgb(37, 37, 37);
  border-radius: 15px;
  outline: none;
  resize: none;
`;
