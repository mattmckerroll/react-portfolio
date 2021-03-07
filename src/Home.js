import React  from 'react'
import { Col, Image, Row } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.p`
    p {
        font-size: 18px;
    }
`;


export const Home = () => (
    <div> 
      <Styles>
      <Row>  
      <Col md={12} sm={8} smOffset={2}>
        <Image src="assets/images/profilepic.jpg" height="200px" width="200px" className="about-profile-pic" rounded />
        <p>Skilled web developer, with experience using React, APIs, and databases, I am also a seasoned test engineer with experience in writing automated test cases using selenium</p>
      </Col>
     </Row> 
     </Styles> 
  </div>
)