import { deleteStreamer, updateVotes } from 'api/streamersAPI';
import { useStreamerContext } from 'contexts/StreamerContext';
import { handleError } from 'helpers';
import { ResponseT, StreamerDataT } from 'types';

export const useStreamerItem = () => {
  const { streamers, setStreamers, setErrorMessage, setShowError } =
    useStreamerContext();

  const updateStreamer = (data: StreamerDataT[]) => {
    return streamers.map(item =>
      item.streamer_id === data[0].streamer_id ? data[0] : item,
    );
  };

  const onDelete = async (id?: string) => {
    const response = (await deleteStreamer(id)) as ResponseT;

    if (response.status !== 200)
      return handleError(response.response.data, setErrorMessage, setShowError);

    setStreamers(response.data);
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

    const response = (await updateVotes(id, newData)) as ResponseT;

    if (response.status !== 200)
      return handleError(response.response.data, setErrorMessage, setShowError);

    setStreamers(updateStreamer(response.data));
  };

  return { onVoteClick, onDelete };
};
