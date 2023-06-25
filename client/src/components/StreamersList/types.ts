import { StreamerDataT } from 'types';

export type ListProps = {
  values: StreamerDataT[];
  onClick?: () => void;
  voteClick: (
    id: string | undefined,
    voteType: string,
    voteValue: number,
  ) => void;
  onDelete: (a?: string) => void;
};
