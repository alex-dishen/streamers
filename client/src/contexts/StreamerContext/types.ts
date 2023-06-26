import { StreamerDataT } from 'types';

export type StreamerContextT = {
  showError: boolean;
  errorMessage: string;
  streamers: StreamerDataT[];
  setShowError: (a: boolean) => void;
  setErrorMessage: (a: string) => void;
  setStreamers: (a: StreamerDataT[]) => void;
};
