import axios from 'axios';
import { StreamerDataT, VotesT } from 'types';

const API_URL = 'http://localhost:8000/streamers';

export const getAllStreamers = async (
  setData: (a: StreamerDataT[]) => void,
) => {
  const response = await axios.get(API_URL);

  if (response.status === 200) setData(response.data);
};

export const createStreamer = async (streamerData: StreamerDataT) => {
  const response = await axios.post(API_URL, streamerData);

  return response;
};

export const deleteStreamer = async (id?: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);

  return response;
};

export const updateVotes = async (id: string | undefined, newData: VotesT) => {
  const response = await axios.put(`${API_URL}/${id}/vote`, newData);

  return response;
};
