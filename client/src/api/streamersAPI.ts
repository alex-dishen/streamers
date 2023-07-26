import axios from 'axios';
import { StreamerDataT, VotesT } from 'types';

const API_URL = import.meta.env.VITE_DATABASE_URL;

export const getAllStreamers = async () => {
  try {
    const response = await axios.get(API_URL);

    return response;
  } catch (error) {
    return error;
  }
};

export const getStreamer = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);

    return response;
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
