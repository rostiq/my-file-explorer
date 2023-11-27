
import axios from 'axios';

const DROPBOX_API_URL = 'https://api.dropboxapi.com/2';
const ACCESS_TOKEN = 'sl.BqrHNINW_GLTaLvqVvnhagl5FvueSmscFA5odzFf-Ns4xhY_LqkGMKhwPd-Iw5QAdvwoQyi6_AiEKcUO8lRkJmIRBQumTZoEn0DMYsMakJQ-8UDBmNMBIIHGih_s57QA0CXyr0CaA_k7';

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
