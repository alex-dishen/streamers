import { useEffect, useState } from 'react';
import { getAllStreamers } from 'api/streamersAPI';
import { ResponseT, StreamerDataT } from 'types';

export const useHomePage = () => {
  const [isFailedToFetch, setIsFailedToFetch] = useState(false);
  const [streamers, setStreamers] = useState<StreamerDataT[]>([]);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFetchData = async () => {
    const response = (await getAllStreamers(setStreamers)) as ResponseT;

    if (response) {
      setErrorMessage(
        response.response?.data || 'The server is possibly not running',
      );
      setIsFailedToFetch(true);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return {
    isFailedToFetch,
    streamers,
    showError,
    errorMessage,
    setShowError,
    setErrorMessage,
    setStreamers,
  };
};
