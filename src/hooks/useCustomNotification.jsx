import { notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const useCustomNotification = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Not implemented yet',
      description: 'We are currently working on this feature. Please check back later.',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };

  return [openNotification, contextHolder];
};

export default useCustomNotification;
