import  React from "react";
import { ListGroup } from 'react-bootstrap';

export const Contact = () => (
    <div>
        {/* <h3>Comunications</h3> */}

        <ListGroup>
        <ListGroup.Item action href="mailto:matthew.mckerroll@gmail.com?subject=Contact from Matthew's Portfolio" >  <i class="fas fa-envelope-open-text"></i> Email </ListGroup.Item>            
        <ListGroup.Item action href="https://github.com/mattmckerroll" target="_blank"> <i class="fab fa-github-square"></i>  Github</ListGroup.Item>
        <ListGroup.Item action href="https://www.linkedin.com/in/matthew-mckerroll-6668a837/" target="_blank">  <i class="fab fa-linkedin"></i>  Linkedin</ListGroup.Item>
        <ListGroup.Item action href="assets/matthewmckerroll2021.pdf" target="_blank"> <i class="fas fa-file"></i> Resume </ListGroup.Item>
    </ListGroup>
    
     </div>
)