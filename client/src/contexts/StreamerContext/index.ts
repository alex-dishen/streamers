import { createContext, useContext } from 'react';
import { StreamerContextT } from 'contexts/StreamerContext/types';

export const StreamerContext = createContext<StreamerContextT | null>(null);

export const useStreamerContext = () => {
  const data = useContext(StreamerContext);

  if (!data) {
    throw new Error('useThemeContext was used outside of its Provider');
  }

  return data;
};
