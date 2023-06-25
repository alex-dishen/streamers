import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(165px, min-content));
  gap: 15px;
  width: 100%;
  list-style: none;
`;

export const Option = styled.li`
  display: flex;
  justify-content: space-between;
  max-width: 165px;
  gap: 5px;
  padding: 15px;
  border: 1px solid rgb(37, 37, 37);
  font-size: 18px;
  border-radius: 15px;
  text-align: center;
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

export const GlowingImage = styled(Image)`
  z-index: -1;
  position: absolute;
  filter: blur(15px);
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
