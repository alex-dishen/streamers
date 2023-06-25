import styled from 'styled-components';

export const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  min-width: 115px;
`;

export const DropDownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 15px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
`;

export const DropDownOptions = styled.ul`
  position: absolute;
  top: 120%;
  width: 100%;
  background-color: white;
  border-radius: 10px;
`;

export const DropDownItem = styled.li`
  display: flex;
  gap: 5px;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
`;
