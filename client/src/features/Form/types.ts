import { DropDownPropsOptionsT, StreamerDataT } from 'types';

export type FormProps = {
  options: DropDownPropsOptionsT[];
  setData: (a: StreamerDataT[]) => void;
};
