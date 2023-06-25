export type StreamerDataT = {
  streamer_id?: string;
  name: string;
  platform: string;
  description: string;
  picture_index: number;
  upvotes: number;
  downvotes: number;
};

export type DropDownPropsOptionsT = {
  id: string;
  name: string;
};

export type VotesT = {
  voteType: string;
  voteValue: number;
};
