import { StreamerDataT } from 'types';

export type ListProps = {
  values: StreamerDataT[];
  voteClick: (
    id: string | undefined,
    voteType: string,
    voteValue: number,
  ) => void;
  onDelete: (a?: string) => void;
};
