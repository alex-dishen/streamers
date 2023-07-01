import { PLATFORM_ICONS } from 'constants';

export type PlatformT = keyof typeof PLATFORM_ICONS;

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

export type VoteTypeT = 'upvotes' | 'downvotes';

export type VotesT = {
  voteType: VoteTypeT;
  voteValue: number;
};

export type ResponseT = {
  status: number;
  data: StreamerDataT[];
  response: { status: number; data: string };
};
