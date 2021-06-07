import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Menu, Button } from 'antd';
import { Avatar, Space } from 'antd';
import {
   
    MenuFoldOutlined,
    UserOutlined,
   
    UploadOutlined,
 
    MailFilled,
    UpSquareOutlined
} from '@ant-design/icons';
import LinkedIn from "../assets/linkedin.png";
import '../components/Sidebar.css';
const { Title } = Typography;


const Sidebar = () => {
    return (
        <div className="sideBar_container">
            <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}/>
            <Title level={2}>Nandhini Devi Madan</Title>
            <Title level={4}>Full Stack Developer</Title>

            <div className="icon_container">
                <a href="https://www.linkedin.com/in/nandhinimadan/">
                <img className="icons"src={LinkedIn} alt="LinkedIn"/>
                </a>
           
                <a href="https://www.linkedin.com/in/nandhinimadan/">
                <img className="icons"src={LinkedIn} alt="LinkedIn"/>
                </a>
                <a href="https://www.linkedin.com/in/nandhinimadan/">
                <img className="icons"src={LinkedIn} alt="LinkedIn"/>
                </a>
                <a href="https://www.linkedin.com/in/nandhinimadan/">
                <img className="icons"src={LinkedIn} alt="LinkedIn"/>
                </a>  
            </div>
            <br></br>
            <hr></hr>
            <Space size={'Large'}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />} >
                        <Link to="/" className="Menu_icon">About Me</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<MenuFoldOutlined />}>
                        <Link to="/Resume" className="Menu_icon">Resume</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        <Link to="/Projects" className="Menu_icon">Projects</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UploadOutlined />}>
                        <Link to="/Blog" className="Menu_icon">Blog</Link>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<MailFilled />}>
                        <Link to="/Contact" className="Menu_icon">Contact</Link>
                    </Menu.Item>
                    <br></br>
                    <Button className="hire_me" type="primary" icon={<UpSquareOutlined />} > Hire Me</Button>
                </Menu>
                <br></br>
                <hr></hr>
            </Space>
        </div>
    )
}

export default Sidebar;
