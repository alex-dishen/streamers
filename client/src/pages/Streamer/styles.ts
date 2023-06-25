import styled from 'styled-components';

export const StreamerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const StreamerDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: clamp(300px, 80vw, 900px);
  padding: 40px;
  border: 1px solid rgb(37, 37, 37);
  border-radius: 20px;

  svg {
    position: relative;
    top: 10px;
    height: 30px;
    width: 30px;
    margin: 0 5px;
  }
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

export const Image = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
`;

export const BluredImage = styled(Image)`
  z-index: -1;
  position: absolute;
  filter: blur(20px);
`;
