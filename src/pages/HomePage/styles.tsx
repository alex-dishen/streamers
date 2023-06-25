import styled from 'styled-components';

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 50px;
  width: clamp(500px, 60vw, 900px);
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h1 {
    font-size: 46px;
    font-weight: 300;
  }

  p {
    color: #777777;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
`;

export const Hr = styled.hr`
  width: 100%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px 40px;
  border: 1px solid rgb(37, 37, 37);
  border-radius: 20px;
`;

export const FormTop = styled.div`
  display: flex;
  gap: 30px;
`;

export const SubmitButton = styled.button`
  padding: 10px 30px;
  background-color: rgb(242, 81, 53);
  color: white;
  border-radius: 10px;
  font-weight: 600;
`;
