import './App.css';
import react from 'react';
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation' 
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
  <div className="App">
     <Sidebar/> 
    <div className="container">
   <Navigation/>
    </div>
  </div>
  );
}

export default App;
