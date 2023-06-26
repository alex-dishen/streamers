import { deleteStreamer, getAllStreamers, updateVotes } from 'api/streamersAPI';
import { useStreamerContext } from 'contexts/StreamerContext';
import { StreamerDataT } from 'types';

export const useStreamerItem = () => {
  const { streamers, setStreamers } = useStreamerContext();

  const updateStreamer = (data: StreamerDataT[]) => {
    return streamers.map(item =>
      item.streamer_id === data[0].streamer_id ? data[0] : item,
    );
  };

  const onDelete = async (id?: string) => {
    const response = await deleteStreamer(id);

    if (response) getAllStreamers(setStreamers);
  };

  const onVoteClick = async (
    id: string | undefined,
    voteType: string,
    voteValue: number,
  ) => {
    const newData = {
      voteType: voteType,
      voteValue: voteValue,
    };

    const { data } = await updateVotes(id, newData);

    setStreamers(updateStreamer(data));
  };

  return { onVoteClick, onDelete };
};
