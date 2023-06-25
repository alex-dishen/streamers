import { StreamerDataT } from 'types';

export type ListProps = {
  value: StreamerDataT[];
  onClick?: () => void;
  onDelete: (a?: string) => void;
};
