import { DropDownPropsOptionsT } from 'types';

export type DropDownProps = {
  title: string;
  optionName: string;
  options: DropDownPropsOptionsT[];
  setOption: (a: string) => void;
};

export type DropDownItemT = {
  isHighlight: boolean;
};
