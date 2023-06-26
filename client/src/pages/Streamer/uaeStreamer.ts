import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getStreamer } from 'api/streamersAPI';
import { cutOffStreamer } from 'pages/Streamer/helpers';
import { StreamerDataT } from 'types';

export const useStreamer = () => {
  const location = useLocation();

  const [streamer, setStreamer] = useState<StreamerDataT>();

  const streamerID = cutOffStreamer(location.pathname);
  useEffect(() => {
    if (location.state?.streamer) return setStreamer(location.state?.streamer);

    getStreamer(streamerID, setStreamer);
  }, []);

  return { streamer };
};
