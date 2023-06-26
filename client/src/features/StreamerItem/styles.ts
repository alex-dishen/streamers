import styled from 'styled-components';
import { FlexColumn } from 'styles';

export const Option = styled.li`
  position: relative;
  padding: 20px 25px;
  border: 1px solid rgb(37, 37, 37);
  font-size: 18px;
  border-radius: 15px;
`;

export const CrossButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 15px;
  width: 15px;
  padding: 4px;
  background-color: rgb(242, 81, 53);
  border-radius: 50%;

  svg {
    height: 100%;
    width: 100%;
    fill: white;
  }
`;

export const OptionBody = styled(FlexColumn)`
  gap: 15px;
  margin-bottom: 15px;
  overflow: hidden;
  cursor: pointer;

  p {
    width: 100%;
    text-align: center;
  }
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
  justify-content: center;
  gap: 25px;
  font-size: 14px;

  p {
    cursor: pointer;
  }
`;
