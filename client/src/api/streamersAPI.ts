import axios from 'axios';
import { StreamerDataT, VotesT } from 'types';

const API_URL = 'http://localhost:8000/streamers';

export const getAllStreamers = async (
  setData: (a: StreamerDataT[]) => void,
) => {
  try {
    const response = await axios.get(API_URL);

    if (response) setData(response.data);
  } catch (error) {
    return error;
  }
};

export const getStreamer = async (
  id: string,
  setData: (a: StreamerDataT) => void,
) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);

    if (response) setData(response.data[0]);
  } catch (error) {
    return error;
  }
};

export const createStreamer = async (streamerData: StreamerDataT) => {
  try {
    const response = await axios.post(API_URL, streamerData);

    return response;
  } catch (error) {
    return error;
  }
};

export const deleteStreamer = async (id?: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);

    return response;
  } catch (error) {
    return error;
  }
};

export const updateVotes = async (id: string | undefined, newData: VotesT) => {
  try {
    const response = await axios.put(`${API_URL}/${id}/vote`, newData);

    return response;
  } catch (error) {
    return error;
  }
};
