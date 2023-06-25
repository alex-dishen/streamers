import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  height: 15px;
  width: 15px;
  padding: 0;

  svg {
    height: 100%;
    width: 100%;
    fill: white;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 15px;
  width: 100%;
  list-style: none;
`;

export const Option = styled.li`
  display: flex;
  gap: 5px;
  padding: 15px;
  border: 1px solid rgb(37, 37, 37);
  font-size: 18px;
  border-radius: 15px;
`;

export const CrossButton = styled(Button)`
  padding: 4px;
  background-color: rgb(242, 81, 53);
  border-radius: 50%;
`;

export const OptionBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
`;

export const Image = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
`;

export const Rating = styled.div`
  display: flex;
  gap: 25px;
  font-size: 14px;

  p {
    cursor: pointer;
  }
`;

export const PenButton = styled(Button)``;
