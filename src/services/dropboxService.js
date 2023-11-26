
import axios from 'axios';

const DROPBOX_API_URL = 'https://api.dropboxapi.com/2';
const ACCESS_TOKEN = 'sl.BqkVsFw2K2zxRwRceudO8iBfg1y-mokoDJuBb70N9rKDk8XAALasj4GJavn6oD9FB_Mad9vbKAu_yThTYIZXWReZWAjz8d2CI4n_5kYxII3EKDyjmkRuJb43eijzYJM8vG5w-lvqJN5g';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${ACCESS_TOKEN}`,
};

const dropboxService = {
  createFolder: async (path) => {
    try {
      const response = await axios.post(
        `${DROPBOX_API_URL}/files/create_folder_v2`,
        { path },
        { headers }
      );
      return response?.data;
    } catch (error) {
      throw error.response?.data;
    }
  },

  listFiles: async (path = '') => {
    try {
      const response = await axios.post(
        `${DROPBOX_API_URL}/files/list_folder`,
        { path },
        { headers }
      );
      return response?.data;
    } catch (error) {
      throw error.response?.data;
    }
  },
};

export default dropboxService;
