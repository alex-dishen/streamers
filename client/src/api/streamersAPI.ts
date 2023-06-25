import axios from 'axios';

const API_URL = 'http://localhost:8000/streamers';

export const getStreamers = () => axios.get(API_URL);
