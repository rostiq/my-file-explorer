
import axios from 'axios';

const DROPBOX_API_URL = 'https://api.dropboxapi.com/2';
const FIRST_PART_TOKEN = 'sl.Bq1s0NYdHk2n1CK9qUu2-nW_dFRM_gp5PYPiY5GlhXg-yvz4Abri-r7zXTEcD9DKyA8BB';
const SECOND_PART_TOKEN = 'zKTjq2Bh5n0gBtuwx5SfAqtSBNdl5aXb0-9SiBEMFlbGTag20moQpyVXfVl1TezMyRtM1sk';
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
