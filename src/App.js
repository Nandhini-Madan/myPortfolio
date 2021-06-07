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
        <Content><Navigation/></Content>
        <Footer className="Footer">
        <div>
         <p>&copy;{(new Date().getFullYear())} Nandhini Madan | All rights reserved | Terms Of Service | Privacy</p>
         </div>
          <div className="legal__links">
             <span>Made with <span className="heart">♥</span> Nandhini Madan</span>
           </div>
 
         </Footer>
      </Layout>
    </Layout>
  );
}

export default App;

