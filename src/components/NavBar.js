import React from 'react';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'


const Header =()=>{
    return(
      <Stack spacing={2} direction="row">
        <Button component = {Link} to='/'>C/S</Button>
      <Button variant="outlined" sx= {{ borderRadius: 28 }} component = {Link} to='/'>Home</Button>
      <Button variant="outlined" sx= {{ borderRadius: 28 }} component = {Link} to='/About'>About</Button>
      <Button variant="outlined" sx= {{ borderRadius: 28 }} component = {Link} to='/Projects'>Projects</Button>
      <Button variant="outlined" sx= {{ borderRadius: 28 }} component = {Link} to='/Contact'>Contact</Button>
      <Button
            onClick={() => {
              window.open("https://drive.google.com/file/d/1Tnjbh0slCqQNWEXJ_NlPViJ1-PSm1E9X/view?usp=sharing");
            }}
            className='resumebtn'><span>Resume</span>
          </Button>
      </Stack>
          );
        }
      

export default Header