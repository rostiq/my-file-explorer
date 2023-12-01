
import axios from 'axios';

const DROPBOX_API_URL = 'https://api.dropboxapi.com/2';
const FIRST_PART_TOKEN = 'sl.Bq7z02ZO_RXPgQt1Fu7enywDTuGCRmEje7tW0CmE6U2Ad9L60cp8xwLkgLlhgUEnYlP5yuUfCcdCapK';
const SECOND_PART_TOKEN = '9v3GY4LwJMHEjv8e48F92PZB1GD-4Ya12fitb2gkRgW6yGZpVez_vvdhwoFcy';
const ACCESS_TOKEN = `${FIRST_PART_TOKEN}${SECOND_PART_TOKEN}`; // replace token here

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
