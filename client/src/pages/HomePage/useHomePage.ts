import { useEffect, useState } from 'react';
import { deleteStreamer, getAllStreamers, updateVotes } from 'api/streamersAPI';
import { StreamerDataT } from 'types';

export const useHomePage = () => {
  const [streamers, setStreamers] = useState<StreamerDataT[]>([]);

  const handleDelete = async (id?: string) => {
    const response = await deleteStreamer(id);

    if (response) getAllStreamers(setStreamers);
  };

  const handleVoteClick = async (
    id: string | undefined,
    voteType: string,
    voteValue: number,
  ) => {
    const data = {
      voteType: voteType,
      voteValue: voteValue,
    };

    const response = await updateVotes(id, data);

    if (response) getAllStreamers(setStreamers);
  };

  useEffect(() => {
    getAllStreamers(setStreamers);
  }, []);

  return { streamers, setStreamers, handleDelete, handleVoteClick };
};
