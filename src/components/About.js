import React from 'react';
import { Space, Typography } from 'antd';
import {Link} from "react-router-dom";
import { Button,Card } from 'antd';
import "../components/About.css";
import 'antd/dist/antd.css';
import {useHistory} from 'react-router-dom';
import reactPic from '../assets/physics.png';

const { Title ,Paragraph} = Typography;
const { Meta } = Card;
 

const About=()=>{
  let history=useHistory();
  const projectHandler=() => {
    history.push({
      pathname: '/Projects',
      
    });
  };
  const resumeHandler=()=>{
    history.push({
      pathname:'/Resume'
    })
  }
return(
   <div >
      <Title className="tittle">About Me</Title>
      <Paragraph>Hi, I am a Full Stack Web Developer with hands-on experience in designing, developing, and implementing applications and solutions using a range of technologies and programming languages.
         Want to know how I may help your project? Check out my <Link to="/Project">project</Link> portfolio and <Link to="/Resume">online resume</Link>.</Paragraph>

<div className="Primary_button">
<Space size={"large"}>
<Button type="primary" onClick={projectHandler}>Project</Button>
<Button type="primary" onClick={resumeHandler}>View Resume</Button>
</Space>
</div>
<br></br>
<br></br>
<hr></hr>
<br></br>
<Title level={2} className="tittle">Skills</Title>
<Paragraph></Paragraph>
  <div className="icon_container">
    <img className="icons" src={reactPic} alt=""/>
    <img className="icons" src={reactPic}/>
    <img className="icons" src={reactPic}/>
    <img className="icons" src={reactPic}/>  
  </div>
<br></br>
<br></br>
<hr></hr>
<Title level={2}>Featured Project</Title>
<div className="projectContainer">
<Card
    hoverable
    style={{ width: 240 }}
    cover={<img className="projectImage" alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Merchant Marketplace" description="" />
  </Card>

  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img className="projectImage" alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img className="projectImage" alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img className="projectImage" alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  </div>
   </div>
   
)
}

export default About;