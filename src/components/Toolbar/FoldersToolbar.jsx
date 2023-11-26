
import { Space } from 'antd';
import FileUpload from './FileUpload';
import CreateFolder from './CreateFolder';
import Share from './Share';
import { Outlet } from 'react-router-dom';

const FoldersToolbar = () => {

  return (
    <>
      <Space>
        <CreateFolder />
        <FileUpload />
        <Share />
      </Space>
      <Outlet />
    </>
  );
};

export default FoldersToolbar;