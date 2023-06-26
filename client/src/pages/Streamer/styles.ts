import styled, { css } from 'styled-components';
import { FlexColumn } from 'styles';

export const StreamerWrapper = styled(FlexColumn)`
  justify-content: center;
  flex: 1;
`;

export const HomeButton = styled.button(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 10px;
    margin-bottom: 25px;
    color: ${theme.colors.gray[400]};

    &,
    svg {
      transition: 300ms;
    }

    &:hover {
      color: white;

      svg {
        fill: white;
      }
    }

    svg {
      height: 15px;
      width: 15px;
      fill: ${theme.colors.gray[400]};
    }
  `,
);

export const StreamerDetails = styled(FlexColumn)`
  gap: 20px;
  width: clamp(280px, 80vw, 900px);
  padding: 40px;
  border: 1px solid rgb(37, 37, 37);
  border-radius: 20px;
  text-align: center;

  svg {
    position: relative;
    top: 10px;
    height: 30px;
    width: 30px;
    margin: 0 5px;
  }
`;

export const Image = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
`;

export const BlurredImage = styled(Image)`
  z-index: -1;
  position: absolute;
  filter: blur(20px);
`;

export const PlatformLine = styled.p`
  margin-top: -15px;
`;

export const Description = styled(FlexColumn)`
  gap: 5px;
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  div {
    display: flex;
    gap: 30px;
  }
`;
