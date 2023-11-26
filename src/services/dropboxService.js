
import axios from 'axios';

const DROPBOX_API_URL = 'https://api.dropboxapi.com/2';
const ACCESS_TOKEN = 'sl.BqkG8Fx4OnMjVG8p9VigD5wUU96IbxHKjLzNC4DnDlmhsbGHTY_-678KbR0TD3DMAKX2BY-GmmOFJt9IGdM7vJykUXGaIzPPry4CqBh0glg8CvVupNUE-A0uR_eX6gqdoq8LKTWDeWqF';

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
