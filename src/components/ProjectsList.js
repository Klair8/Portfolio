import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Projects =()=>{
          return (
            <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Space-Invader</Card.Title>
                <Card.Text>
                Space Invader Game, created essentialy with Javascrip .
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
             <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src="holder.js/100px180" />
             <Card.Body>
               <Card.Title>Book Repertory</Card.Title>
               <Card.Text>
                 Book Repertory, created with Node.js and REST API technic.
               </Card.Text>
               <Button variant="primary">Go somewhere</Button>
             </Card.Body>
           </Card>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>NLP Projects</Card.Title>
              <Card.Text>
                Learning process for Kids using Node.Js, React and Redux
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </div>
          );
        }

export default Projects