import styled, { css } from 'styled-components';
import { DropDownItemT } from 'components/DropDown/types';
import { FlexColumn } from 'styles';

export const DropDownWrapper = styled(FlexColumn)`
  align-items: flex-start;
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
  color: white;
  border: 1px solid rgb(37, 37, 37);
  border-radius: 10px;
`;

export const DropDownOptions = styled.ul`
  position: absolute;
  top: 120%;
  width: 100%;
  background-color: #0f0f0f;
  border: 1px solid rgb(37, 37, 37);
  border-radius: 10px;
`;

export const DropDownItem = styled.li<DropDownItemT>(
  ({ isHighlight }) => css`
    padding: 10px 15px;
    color: ${isHighlight ? 'white' : '#777777'};
    font-size: 18px;
    list-style: none;
    transition: 300ms;
    cursor: pointer;

    &:hover {
      color: white;
    }
  `,
);
