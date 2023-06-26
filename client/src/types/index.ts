import { PlatformIcons } from 'constants';

export type PlatformT = keyof typeof PlatformIcons;

export type StreamerDataT = {
  streamer_id?: string;
  name: string;
  platform: PlatformT;
  description: string;
  picture_index: number;
  upvotes: number;
  downvotes: number;
};

export type DropDownPropsOptionsT = {
  id: string;
  name: PlatformT;
};

export type VotesT = {
  voteType: string;
  voteValue: number;
};
