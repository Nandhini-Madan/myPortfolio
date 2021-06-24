import React from 'react';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import portfolio from '../assets/Nandhini-FullStackDeveloper.pdf';
import "../components/Resume.css";

const { Title } = Typography;
const Resume = () => {
   const Experience = [{
      "companyName": "Aegis consultancy",
      "details":
      {
         "PowerStatement": ["Created tables, indexes and design constraints and wrote T-SQL statements for retrieval of data; involved in performance tuning of T-SQL queries and stored procedures",
            "Generated periodic reports based on the statistical analysis of the data using SSRS",
            "Maintained data integrity and database structure including tables, views, and triggers"]
      }
   }]
   const Projects = [{
      "projectName": "Merchant MarketPlace",
      "details": {
         "powerStatement": [
            "Developed and deployed front-end with React, sorting the products of all sellers using search functionality"

         ]
      }
   }, {
      "projectName": "Silent Auction",
      "details": {
         "powerStatement": [
            "Developed and deployed front-end with React, displaying a form that allows the user to sign up or sign in",
            "Performed form validation for sign up and sign in forms",
            "Implemented CRUD operations to the product component",
            "Created gallery functionality using database storage so that users can upload photos of their product"

         ]
      }

   },
   {
      "projectName": "Potluck Planner",

      "details": {
         "powerStatement": [
            "Implemented user authentication with JSON Web Token and Bcrypt to allow users to sign up and log in",
            "Engineered backend code for making CRUD operations",
            "Created gallery functionality using database storage so that users can upload photos of their trip"
         ]
      }
   }
   ]

   return (
      <div >
         <div>
            <Row>
               <Col span={16}>
                  <Title level={2}>Nandhini Devi Madan</Title>
                  <Title level={4}>Full Stack Web developer</Title>
                  <br></br>
                  <br></br>
                  <hr></hr>
               </Col>
               <vr></vr>
               <Col span={8}>
                  <div>
                     nandhinimadan20@gmail.com
                  </div>
                  <div>
                     Seattle,WA
                  </div>
                  <div>
                     <a href={portfolio} download>
                        <div>Download Resume</div>
                     </a>
                  </div>
               </Col>
            </Row>
            <div>
               <Title level={2}>Projects</Title>
            </div>
            <div>
               {
                  Projects.map(project => {
                     return (
                        <div>

                           <Title className="titleName" level={3}>{project.projectName}</Title>
                           {
                              project.details.powerStatement.map(power => {
                                 return (
                                    <ul className="description">
                                       <li>{power}</li>
                                    </ul>
                                 )
                              }

                              )
                           }
                        </div>
                     )

                  })

               }
            </div>
            <br></br>
            <hr></hr>
            <div>
               <Title level={2}>Experience</Title>
            </div>

            <div>
               {
                  Experience.map(experience => {
                     return (
                        <div>
                           <Title className="titleName" level={3}>{experience.companyName}</Title>
                           {
                              experience.details.PowerStatement.map(power => {
                                 return (
                                    <ul className="description">
                                       <li>{power}</li>
                                    </ul>
                                 )

                              })
                           }
                        </div>
                     )
                  })
               }



            </div>


         </div>
      </div>
   )
}

export default Resume;