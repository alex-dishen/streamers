import { deleteStreamer, updateVotes } from 'api/streamersAPI';
import { useStreamerContext } from 'contexts/StreamerContext';
import { handleError } from 'helpers';
import { ResponseT, StreamerDataT, VoteTypeT } from 'types';

export const useStreamerItem = () => {
  const { streamers, setStreamers, setErrorMessage, setShowError } =
    useStreamerContext();

  const updateStreamer = (data: StreamerDataT, voteType: VoteTypeT) => {
    return streamers.map(item =>
      item.streamer_id === data.streamer_id
        ? { ...item, [voteType]: data[voteType] }
        : item,
    );
  };

  const onDelete = async (id?: string) => {
    if (streamers.length <= 1)
      return handleError(
        "You can't delete the last streamer",
        setErrorMessage,
        setShowError,
      );

    const updatedStreamers = streamers.filter(
      streamer => streamer.streamer_id !== id,
    );

    setStreamers(updatedStreamers);

    const response = (await deleteStreamer(id)) as ResponseT;

    if (response.status !== 200)
      return handleError(response.response.data, setErrorMessage, setShowError);
  };

  const onVoteClick = async (
    id: string | undefined,
    voteType: VoteTypeT,
    voteValue: number,
  ) => {
    const newData = {
      voteType: voteType,
      voteValue: voteValue,
    };

    const currentStreamer = streamers.find(
      streamer => streamer.streamer_id === id,
    ) as StreamerDataT;

    const updatedStreamer = {
      ...currentStreamer,
      [voteType]: currentStreamer?.[voteType] + 1,
    };

    setStreamers(updateStreamer(updatedStreamer, voteType));

    const response = (await updateVotes(id, newData)) as ResponseT;

    if (response.status !== 200)
      return handleError(response.response.data, setErrorMessage, setShowError);
  };

  return { onVoteClick, onDelete };
};
