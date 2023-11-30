
import { Link } from 'react-router-dom';
import { Spin, Result, Table, Space, Typography } from 'antd';
import { FolderFilled, FileOutlined } from '@ant-design/icons';
import useDropbox from '../../hooks/useDropbox';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectError, selectFolders, selectLoading } from '../../redux/foldersSlice';
import useCustomParams from '../../hooks/useCustomParams';
const { Text } = Typography;

const FoldersTable = () => {
  const folders = useSelector(selectFolders);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const { fetchData } = useDropbox();
  
  const {fullPath} = useCustomParams();

  useEffect(() => {
    fetchData(fullPath);
  }, [fullPath]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name, record) => {
        const { '.tag': tag, path_lower } = record;
        const isFolder = tag === 'folder';
        return (
          <Link
            to={isFolder ? path_lower : ''}
          >
            <Space>
              {isFolder ? (
                <FolderFilled style={{ fontSize: 24 }} />
              ) : (
                <FileOutlined style={{ fontSize: 24 }} />
              )}
              <Text>{name}</Text>
            </Space>
          </Link>
        );
      },
    },
  ];

  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }}>
        {loading ? (
          <Spin size="large" style={{ width: '100%' }} />
        ) : error ? (
          <Result status="error" title="Something went wrong" subTitle={error} />
        ) : (
          <Table
            dataSource={folders}
            columns={columns}
            rowKey="path_lower"
            pagination={{ pageSize: 10 }}
          />
        )}
      </Space>
    </>
  );
};

export default FoldersTable;


