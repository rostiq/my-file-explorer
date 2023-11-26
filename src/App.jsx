import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout, Space } from 'antd';
import './index.css';
import Logo from './components/Logo';
import FoldersTable from './components/Content/FoldersTable';
import FoldersToolbar from './components/Toolbar/FoldersToolbar';
import { Provider } from 'react-redux';
import store from './redux/store';

const { Header, Content } = Layout;

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Space direction="vertical">
            <Header>
              <Logo />
            </Header>
            <Content className="content">
              <Space direction="vertical" style={{ width: '100%' }}>
                <Routes>
                  <Route path="/" element={<FoldersToolbar />}>
                    <Route index element={<FoldersTable />} />
                    <Route path=":folderName/*" element={<FoldersTable />} />
                  </Route>
                </Routes>
              </Space>
            </Content>
          </Space>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;