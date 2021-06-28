import React from 'react';

import { Card } from 'antd';
import "../components/projects.css";
import {  Typography } from 'antd';
import silentAuction from "../../src/assets/silentAuction.jpg";
import PotluckPlanner from "../../src/assets/postgres.jpg";
import MerchantMarket from "../../src/assets/MerchantMarket.png"
const { Meta } = Card;
const { Title ,Paragraph} = Typography;
const Projects = () => {
   return (
      <>
      <Title level={2}>Recent Projects</Title>
      <div className="projectContainer">    
         <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={MerchantMarket} />}
         >
            <Meta title="Merchant Marketplace" description=" A website designed for seller to post there unique products. So the customer can order there products from home" />
            <a
            href=""
            >
               View code
            </a>
         </Card>

         <Card
            hoverable
            style={{ width: 240 }}
            cover={<img  alt="example" src={PotluckPlanner} />}
         >
            <Meta title="Potluck Planner" description="A website designed to invite guest for doing potluck" />
         </Card>
         <Card
            hoverable
            style={{ width: 240 }}
            cover={<img  alt="example" src={silentAuction} />}
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
            cover={<img  alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
         >
            <Meta title="African MarketPlace" description="A website designed for poor woman farmers in africa to place there small quantity of vegetables for order" />
         </Card>
        
      </div>
      </>
   )
}

export default Projects;