import React from 'react'
import Card from 'react-bootstrap/Card';

const Projects =()=>{
          return (
            <div className='projectList'>
            <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Space-Invader</Card.Title>
                <Card.Text>
                Space Invader Game, created essentialy with Javascrip .
                </Card.Text>
                <a href="https://klair8.github.io/HACKATHON-1" class="btn"><i class="fab fa-github"></i> See Full Project</a>
              </Card.Body>
            </Card>
             <Card>
             <Card.Img variant="top" src="holder.js/100px180" />
             <Card.Body>
               <Card.Title>Book Repertory</Card.Title>
               <Card.Text>
                 Book Repertory, created with Node.js and REST API technic, with the use of the Google Book Api
               </Card.Text>
               <a href="#" class="btn"><i class="fab fa-github"></i> See Full Project</a>
             </Card.Body>
           </Card>
            <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>NLP Projects</Card.Title>
              <Card.Text>
                Learning process for Kids using Node.Js, React and Redux
              </Card.Text>
              <a href="#" class="btn"><i class="fab fa-github"></i> See Full Project</a>
            </Card.Body>
          </Card>
          </div>
          );
        }

export default Projects