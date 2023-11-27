
import axios from 'axios';

const DROPBOX_API_URL = 'https://api.dropboxapi.com/2';
const ACCESS_TOKEN = 'sl.BqqPoKJ9ON9HCsYmjWQHCr-vcebbHJxh2B1O712IXF9zbxVW3u2lnBY8pkmG_twzTWJZZNUy0VhQ96BEiCtvNSqURYaVGG9AZvghUUBGAa-K5zVRfoyZtXuD1oFTPVxWg3NSKGyqMkm_'; // enter new access token here

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
