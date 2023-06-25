import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  padding: 30px 40px;
  backdrop-filter: blur(15px);
  box-shadow: 0 0 10px 1px rgb(56, 165, 255);
  border-radius: 20px;
`;

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: min(450px, 90%);
`;

export const FormTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SubmitButton = styled.button`
  padding: 10px 30px;
  background-color: rgb(56, 165, 255);
  border-radius: 10px;
  font-weight: 600;
`;
