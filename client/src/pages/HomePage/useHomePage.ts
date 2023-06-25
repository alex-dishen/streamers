import { useEffect, useState } from 'react';
import { getAllData } from 'api/streamersAPI';

export const useHomePage = () => {
  const [streamers, setStreamers] = useState([]);

  const getAllStreamers = async () => {
    const response = await getAllData();

    setStreamers(response.data);
  };

  useEffect(() => {
    getAllStreamers();
  }, []);

  return { streamers };
};
