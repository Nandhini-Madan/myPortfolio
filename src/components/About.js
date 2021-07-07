import React from 'react';
import { Space, Typography } from 'antd';
import { Link } from "react-router-dom";
import { Button, Card } from 'antd';
import "../components/About.css";
import 'antd/dist/antd.css';
import { useHistory } from 'react-router-dom';
import reactPic from '../assets/physics.png';
import silentAuction from "../../src/assets/silentAuction.jpg";
import PotluckPlanner from "../../src/assets/postgres.jpg";
const { Title, Paragraph } = Typography;
const { Meta } = Card;


const About = () => {
  let history = useHistory();
  const projectHandler = () => {
    history.push({
      pathname: '/Projects',

    });
  };
  const resumeHandler = () => {
    history.push({
      pathname: '/Resume'
    })
  }
  return (
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
        <img className="icons" src={reactPic} alt="React" />
        <img className="icons" src={reactPic} alt="" />
        <img className="icons" src={reactPic} alt="" />
        <img className="icons" src={reactPic} alt="" />
      </div>
      <br></br>
      <br></br>
      <hr></hr>
      <Title level={2}>Featured Project</Title>
      <div className="projectContainer">
        <Card
          hoverable
          style={{ width: 240, height: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Merchant Marketplace" description=" A website designed for seller to post there unique products. So the customer can order there products from home" />
          <a
            href="https://github.com/Nandhini-Madan/SilentAuction"
          >
            View code
          </a>
        </Card>

        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={PotluckPlanner} />}
        >
          <Meta title="Potluck Planner" description="A website designed to invite guest for doing potluck" />
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={silentAuction} />}
        >
          <Meta title="Silent Auction" description="A website designed for people to post there product for auction" />
          <a
            href="https://github.com/Nandhini-Madan/SilentAuction"

          >
            View code

          </a>
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="African MarketPlace" description="A website designed for poor woman farmers in africa to place there small quantity of vegetables for order" />
        </Card>
      </div>
    </div>

  )
}

export default About;