import { useDispatch } from 'react-redux';
import { updateFolders, updateRequest, updateError } from '../redux/foldersSlice';
import dropboxService from '../services/dropboxService';

const useDropbox = () => {
  const dispatch = useDispatch();

  const handleUpdateError = (error) => dispatch(updateError(error.replace(/[_/]/g, ' ')  || 'Please contact support'));
  const fetchData = async (path = '') => {
    dispatch(updateRequest());
    try {
      const response = await dropboxService.listFiles(path);
      dispatch(updateFolders(response?.entries || []));
    } catch (error) {
      handleUpdateError(error.error_summary)
    }
  };

  const createFolder = async ( path = '', folderName) => {
    const fullPath = path ? `${path}/${folderName}` : `/${folderName}`
    try {
      await dropboxService.createFolder(fullPath);
      fetchData(path);
    } catch (error) {
      handleUpdateError(error.error_summary)
    }
  };

  return {
    fetchData,
    createFolder,
  };
};

export default useDropbox;
