import styled from 'styled-components';

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledTextArea = styled.textarea`
  height: 240px;
  width: 100%;
  padding: 12px 20px;
  background-color: transparent;
  border: 1px solid rgb(37, 37, 37);
  border-radius: 15px;
  outline: none;
  resize: none;
`;
