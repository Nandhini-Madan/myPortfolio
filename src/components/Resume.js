import React from 'react';
import {Row, Col} from 'antd';
import { Typography } from 'antd';
import portfolio from '../assets/Nandhini-FullStackDeveloper.pdf';

const { Title } = Typography;
const Resume=()=>{
return(
   <div >
      <a href={portfolio} download>

         <div>Download</div>
      </a>
      <div>
      <Row>
      <Col span={16}>
      
      <Title level={2}>Nandhini Devi Madan</Title>
      <Title level={4}>Full Stack Web developer</Title>
<hr></hr>
      </Col>
      
      <Col span={8}>
         <div>
            hjkhjhj
            nkm,mlm
         </div>
      </Col>
    </Row>
      </div>
   </div>
)
}

export default Resume;