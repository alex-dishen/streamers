import { StreamerDataT } from 'types';

export type ListProps = {
  values: StreamerDataT[];
  onClick?: () => void;
  onDelete: (a?: string) => void;
};
