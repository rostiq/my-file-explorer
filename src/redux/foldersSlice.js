
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  folders: [],
  loading: false,
  error: null,
};

const foldersSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    updateRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateFolders: (state, action) => {
      state.folders = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  updateFolders,
  updateRequest,
  updateError,
} = foldersSlice.actions;

export const selectFolders = (state) => state.folders.folders;
export const selectLoading = (state) => state.folders.loading;
export const selectError = (state) => state.folders.error;

export default foldersSlice.reducer;
