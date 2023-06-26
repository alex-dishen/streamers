import { DropDownPropsOptionsT, PlatformT } from 'types';

export type DropDownProps = {
  title: string;
  optionName: string;
  options: DropDownPropsOptionsT[];
  setOption: (a: PlatformT) => void;
};

export type DropDownItemT = {
  isHighlight: boolean;
};
