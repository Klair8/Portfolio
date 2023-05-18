import * as React from 'react';
import SpaceInvader from '../assets/SpaceInvader.png';
import MyBookList from '../assets/MyBookList.png';
import MoviesApp from '../assets/MoviesApp.png';
import NLP from '../assets/NLP.png'
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';


const Projects =()=>{
  return (
  <div className='my-component'>
    <div className='cards'>
     <Card sx={{ maxWidth: 345 , border:"2px solid black", fontFamily:'Quicksand-Medium' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={SpaceInvader}
          alt="Space Invaders Games"
        />
        <CardContent>
          <br></br>
          <Typography gutterBottom variant="h5" component="div" level="h1" fontSize="lg" textColor="black" >
            Space Invaders
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Old School Space Invaders Game only with Javascript.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button variant="outlined" sx= {{ borderRadius: 28 }} size="large" href="https://klair8.github.io/HACKATHON-1">
          See More
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 , border:"2px solid black" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={MyBookList}
          alt="Book Repertory"
        />
        <CardContent>
        <br></br>
          <Typography gutterBottom variant="h5" component="div" level="h1" fontSize="lg" textColor="black" >
          Book Repertory
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Book Repertory, created with Node.js and REST API technic.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button variant="outlined" sx= {{ borderRadius: 28 }} size="large" href="https://my-booklist.onrender.com">
          See More
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 , border:"2px solid black"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={NLP}
          alt="Story Telling for kids"
        />
        <CardContent>
        <br></br>
          <Typography gutterBottom variant="h5" component="div" level="h1" fontSize="lg" textColor="black" >
          NLP Project
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Learning Process for Kids . Full Stack process using Node.Js and React.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button variant="outlined" sx= {{ borderRadius: 28 }} size="large" href="https://dream-learning.vercel.app">
          See More
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 , border:"2px solid black"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={MoviesApp}
          alt="Movies Search App"
        />
        <CardContent>
        <br></br>
          <Typography gutterBottom variant="h5" component="div" level="h1" fontSize="lg" textColor="black" >
          Movies & Series App
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Search App for Movies and Series using Redux and React.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button variant="outlined" sx= {{ borderRadius: 28 }} size="large" href="https://movies-app-kappa-eight.vercel.app">
          See More
        </Button>
      </CardActions>
    </Card>
    </div>
  </div>
  )
}


export default Projects