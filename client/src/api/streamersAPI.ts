import axios from 'axios';
import { StreamerDataT } from './types';

const API_URL = 'http://localhost:8000/streamers';

export const getAllData = () => axios.get(API_URL);

export const postData = (streamerData: StreamerDataT) =>
  axios.post(API_URL, streamerData);
