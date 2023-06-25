import { useEffect, useState } from 'react';
import { getStreamers } from 'api/streamersAPI';

export const useHomePage = () => {
  const [streamers, setStreamers] = useState([]);

  const getAllStreamers = async () => {
    const response = await getStreamers();

    setStreamers(response.data);
  };

  useEffect(() => {
    getAllStreamers();
  }, []);

  return { streamers };
};
