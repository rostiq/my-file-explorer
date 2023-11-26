
import { Button } from 'antd';
import useCustomNotification from '../../hooks/useCustomNotification';
import { UploadOutlined } from '@ant-design/icons';


const Share = () => {
    const [openNotification, contextHolder] = useCustomNotification();

  return (
    <>
      {contextHolder}
      <Button icon={<UploadOutlined /> } onClick={openNotification}>Upload File</Button>
    </>
  );
};

export default Share;