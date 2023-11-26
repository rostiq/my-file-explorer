/* eslint-disable no-extra-boolean-cast */
import { useParams } from "react-router-dom";

const useCustomParams = () => {
    const params = useParams();
    const { folderName } = params;
    const subFolderPath = params['*'];
    const fullPath = !!folderName ? !!subFolderPath ? `/${folderName}/${subFolderPath}` : `/${folderName}` : '';
    return {fullPath};
};

export default useCustomParams;