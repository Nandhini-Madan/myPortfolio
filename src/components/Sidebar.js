import React from 'react'
import img from '../assets/facebook.svg'
import About from "../components/About"
import Navigation from "../components/Navigation"
import { Route, Switch, Link } from 'react-router-dom'
import { Typography, Menu, Button } from 'antd';
import { Avatar, Image,Space } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    LinkedinOutlined,
    TwitterOutlined,
    GithubOutlined,
    MailFilled,
    UpSquareOutlined
} from '@ant-design/icons';
import '../components/Sidebar.css';
const { Title } = Typography;


const Sidebar = () => {
    return (
        <div>
            
            <Title level={2}>Nandhini Devi Madan</Title>
            <Avatar size={3}  />
            <Title level={4}>Full Stack Developer</Title>
           
           <div className="icon">
            <LinkedinOutlined />
            <TwitterOutlined />
            <GithubOutlined />
            <MailFilled />
           </div>
            <br></br>
            <hr></hr>
            <Space size={'Large'}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />} >
                        <Link to="/" className="Menu_icon">About Me</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        <Link to="/Resume" className="Menu_icon">Resume</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        <Link to="/Projects" className="Menu_icon">Projects</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UploadOutlined />}>
                        <Link to="/Blog" className="Menu_icon">Blog</Link>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<UploadOutlined />}>
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
