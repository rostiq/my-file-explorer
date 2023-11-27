
import axios from 'axios';

const DROPBOX_API_URL = 'https://api.dropboxapi.com/2';
const ACCESS_TOKEN = 'sl.BqoqH3zrL6ybMn7-lZT3P5y7tyFg8BRjHm172jBdU6L1kqMv6I10Sg8KZRcGfKUDdgBqlwNZSDoBEhh2bawYqfFQngxPkZEKfO3f3KfBNkfKJNCYKcOCr_xyg4W4S7LSxU4jI1qpUFx3';

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
