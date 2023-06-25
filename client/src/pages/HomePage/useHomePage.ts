import { useEffect, useState } from 'react';
import { getAllStreamers } from 'api/streamersAPI';
import { StreamerDataT } from 'types';

export const useHomePage = () => {
  const [streamers, setStreamers] = useState<StreamerDataT[]>([]);

  useEffect(() => {
    getAllStreamers(setStreamers);
  }, []);

  return { streamers, setStreamers };
};
