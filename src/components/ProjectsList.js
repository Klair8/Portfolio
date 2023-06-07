import * as React from 'react';
import SpaceInvader from '../assets/SpaceInvader.png';
import MyBookList from '../assets/MyBookList.png';
import MoviesApp from '../assets/MoviesApp.png';
import LoveApp from '../assets/LoveApp.png';
import NLP from '../assets/NLP.png'
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Grid, Button, CardActionArea, CardActions } from '@mui/material';



const Projects = () => {
  return (
    <div className="cardsprojects">
      <Grid container spacing={2} marginTop={'8vh'} marginLeft={'5vh'} marginRight={'5vh'}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ border: "2px solid black", margin: "10px" }}>
            <CardActionArea>
            <a href="https://dream-learning.vercel.app">
              <CardMedia
                component="img"
                height="280"
                image={NLP}
                alt="Story Telling for kids"
              />
            </a>  
              <CardContent>
                <br />
                <Typography gutterBottom variant="h5" component="div" level="h1" fontSize="lg" textColor="black">
                  Reading Learning Method for Kids using NLP
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Full Stack process.
                  Using ElephantSQL, Node JS , React JS, integrated with NLP library and Ninja API dictionnary. 
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="outlined" sx={{ borderRadius: 28 }} size="small" href="https://dream-learning.vercel.app">
                See Me
              </Button>
              <Button variant="outlined" sx={{ borderRadius: 28 }} size="small" href="https://github.com/Klair8/Final-Project-Server">
                Github - Server Side
              </Button>
              <Button variant="outlined" sx={{ borderRadius: 28 }} size="small" href="https://github.com/Klair8/Final-Project-Client">
                Github - Client Side
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ border: "2px solid black", margin: "10px" }}>
            <CardActionArea>
            <a href="https://movies-app-klair8.vercel.app">
              <CardMedia
                component="img"
                height="280"
                image={MoviesApp}
                alt="Movies Search App"
              />
            </a>
              <CardContent>
                <br />
                <Typography gutterBottom variant="h5" component="div" level="h1" fontSize="lg" textColor="black">
                  Movies & Series App
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Using React JS & Redux JS integrated with API movies data APIOMDB.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="outlined" sx={{ borderRadius: 28 }} size="small" href="https://movies-app-klair8.vercel.app">
                See Me
              </Button>
              <Button variant="outlined" sx={{ borderRadius: 28 }} size="small" href="https://github.com/Klair8/Movies-Series-App">
                Github Code
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ border: "2px solid black", margin: "10px" }}>
            <CardActionArea>
            <a href="https://the-cupid.vercel.app/">
              <CardMedia
                component="img"
                height="280"
                image={LoveApp}
                alt="Love-Calculator"
              />
              </a>
              <CardContent>
                <br />
                <Typography gutterBottom variant="h5" component="div" level="h1" fontSize="lg" textColor="black">
                Love Calculator App
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Using React JS & Redux JS integrated with Rapyd API.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="outlined" sx={{ borderRadius: 28 }} size="small" href="https://the-cupid.vercel.app/">
                See Me
              </Button>
              <Button variant="outlined" sx={{ borderRadius: 28 }} size="small" href="https://github.com/Klair8/Love-App">
                Github Code
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ border: "2px solid black", margin: "10px" }}>
            <CardActionArea>
            <a href="https://my-booklist.onrender.com">
              <CardMedia
                component="img"
                height="280"
                image={MyBookList}
                alt="Book Repertory"
              />
            </a>
              <CardContent>
                <br />
                <Typography gutterBottom variant="h5" component="div" level="h1" fontSize="lg" textColor="black">
                  Book Repertory
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Using Node JS with REST Api technic & integrated with Google Books APIs.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="outlined" sx={{ borderRadius: 28 }} size="small" href="https://my-booklist.onrender.com">
                See Me
              </Button>
              <Button variant="outlined" sx={{ borderRadius: 28 }} size="small" href="https://github.com/Klair8/HACKATHON">
                Github Code
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ border: "2px solid black", margin: "10px" }}>
            <CardActionArea>
            <a href="https://klair8.github.io/HACKATHON-1">
              <CardMedia
                component="img"
                height="280"
                image={SpaceInvader}
                alt="Space Invaders Games"
              />
            </a>
              <CardContent>
                <br />
                <Typography gutterBottom variant="h5" component="div" level="h1" fontSize="lg" textColor="black">
                  Space Invaders Game
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 Using Only Javascript.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="outlined" sx={{ borderRadius: 28 }} size="small" href="https://klair8.github.io/HACKATHON-1">
                See Me
              </Button>
              <Button variant="outlined" sx={{ borderRadius: 28 }} size="small" href="https://github.com/Klair8/HACKATHON-1">
                Github Code
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;