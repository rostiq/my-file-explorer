
import { Button } from 'antd';
import useCustomNotification from '../../hooks/useCustomNotification';

const Share = () => {
    const [openNotification, contextHolder] = useCustomNotification();

  return (
    <>
      {contextHolder}
      <Button  onClick={openNotification}>
        Share
      </Button>
    </>
  );
};

export default Share;