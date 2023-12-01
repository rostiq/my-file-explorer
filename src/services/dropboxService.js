
import axios from 'axios';

const DROPBOX_API_URL = 'https://api.dropboxapi.com/2';
const FIRST_PART_TOKEN = 'sl.Bq53mv8NGpDnL-e-PbpnUDTE1FdoXDpNZlaelZsAQqQFJ9iGehotuyRoNmQX_Kw0BWl';
const SECOND_PART_TOKEN = 'Pe_HgCw-e37o7BbekCbEKUL59rVQfv0hD9b4CehVgasHIVPr97GH1GSKlqw39miYDx0i_ZxJu';
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
