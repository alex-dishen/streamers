import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getStreamer } from 'api/streamersAPI';
import { cutOffStreamer } from 'pages/Streamer/helpers';
import { ResponseT, StreamerDataT } from 'types';

export const useStreamer = () => {
  const [showSorry, setShowSorry] = useState(false);
  const location = useLocation();

  const [streamer, setStreamer] = useState<StreamerDataT>();

  const streamerID = cutOffStreamer(location.pathname);

  const handleGetRequest = async () => {
    const response = (await getStreamer(streamerID, setStreamer)) as ResponseT;

    if (response.status !== 200) setShowSorry(true);
  };

  useEffect(() => {
    if (location.state?.streamer) return setStreamer(location.state?.streamer);

    handleGetRequest();
  }, []);

  return { showSorry, streamer };
};
