import { StreamerDataT } from 'types';

export type StreamerContextT = {
  streamers: StreamerDataT[];
  setStreamers: (a: StreamerDataT[]) => void;
};
