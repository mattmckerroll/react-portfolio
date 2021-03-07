import  React from "react";
import { Card, CardColumns} from 'react-bootstrap';



export const Portfolio = () => (
    
  <CardColumns>

  <Card>
    <Card.Img variant="top" src="../assets/projects/weatherapp.png" height="180px" width="180px" />
    <Card.Body>
      <Card.Title>Weather Dashboard</Card.Title>
      <Card.Text>
      This is an app I developed to allow users to instantly see the weather in any city they type into the search bar.
      </Card.Text>
      <Card.Link href="https://mattmckerroll.github.io/weatherDashboard/"><i class="fas fa-external-link-alt"></i>See it here!</Card.Link>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src="../assets/projects/burgerapp.png" height="170px" width="180px"/>
    <Card.Body>
      <Card.Title>Burger</Card.Title>
      <Card.Text>
      My burger app! This is an app I developed to demonstrate databases, handlebars, and ORMs!
      </Card.Text>
      <Card.Link href="https://agile-chamber-71239.herokuapp.com/"><i class="fas fa-external-link-alt"></i>See it here!</Card.Link>
    </Card.Body>
  </Card>

  <Card>
    <Card.Body>
      <Card.Title>Employee Template Engine</Card.Title>
      <Card.Text>
      This is an app that can create a template with information on the people of your software dev team!
      </Card.Text>
      <Card.Link href="https://github.com/mattmckerroll/EmployeeTemplateEngine"><i class="fas fa-external-link-alt"></i>Find out more</Card.Link>
    </Card.Body>
  </Card>

  <Card className="pb-4">
    <Card.Img variant="top" src="../assets/projects/group1.png" height="193px" width="180px" />
    <Card.Body>
      <Card.Title>NYT Movie review Database</Card.Title>
      <Card.Text>
     This is an application that utilized The Movie Database API as well as the New York Times API to pull any NYT movie review you want INSTANTLY!
      </Card.Text>
      <Card.Link href="https://uoft-group7-project-1.github.io/Group7_Project-1/"><i class="fas fa-external-link-alt"></i>Find out more</Card.Link>
    </Card.Body>
  </Card>

  <Card className="pb-4">
    <Card.Img variant="top" src="../assets/projects/employeetracker.png" height="193px" width="180px" />
    <Card.Body>
      <Card.Title>Employee Tracker App</Card.Title>
      <Card.Text>
      This is an app that can track employees, their roles, salaries and departments!
      </Card.Text>
      <Card.Link href="https://github.com/mattmckerroll/employeetracker"><i class="fas fa-external-link-alt"></i>Find out more</Card.Link>
    </Card.Body>
  </Card>

  <Card className="pb-4">
    <Card.Img variant="top" src="../assets/projects/dayplanner.png" height="193px" width="180px" />
    <Card.Body>
      <Card.Title>Day Planner</Card.Title>
      <Card.Text>
      This site is so you can save some text in different textboxes representing tasks that occur at a certain hour. even if you leave the page, your entries are saved.
      </Card.Text>
      <Card.Link href="https://github.com/mattmckerroll/MDMdayPlanner"><i class="fas fa-external-link-alt"></i>Find out more</Card.Link>
    </Card.Body>
  </Card>

  </CardColumns>


  

    
)