
import axios from 'axios';

const DROPBOX_API_URL = 'https://api.dropboxapi.com/2';
const FIRST_PART_TOKEN = 'sl.Bq0LbdMFm8DwfhtcH3Lkr82l_mAdic1BJctUW_E';
const SECOND_PART_TOKEN = '4Wu8oIhhFAoznn5LUIeRH2nq_JcAdt6CJkFdprlGC0VWZVwrW-AO5yuIATr_bDCmZicOycpuYTvxFJuzWaMbT9MAIX7iWHPT_hD_8';
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
