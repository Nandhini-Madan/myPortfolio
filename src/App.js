import './App.css';
import react from 'react';
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <Layout className="App">
      <Sider className="slider"><Sidebar/></Sider>
      <Layout>
        <Header>Header</Header>
        <Content><Navigation/></Content>
        <Footer style={{ textAlign: 'center' }}> ©2018 Created by Nandhini Madan</Footer>
      </Layout>
    </Layout>
  );
}

export default App;

