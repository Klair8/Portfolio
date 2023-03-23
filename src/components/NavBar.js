import React from 'react';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'


const Header =()=>{
    return(
      <Stack spacing={2} direction="row">
        <Button component = {Link} to='/'>C/S</Button>
      <Button variant="outlined" component = {Link} to='/'>Home</Button>
      <Button variant="outlined" component = {Link} to='/About'>About</Button>
      <Button variant="outlined" component = {Link} to='/Projects'>Projects</Button>
      <Button variant="outlined" component = {Link} to='/Contact'>Contact</Button>
      </Stack>
          );
        }
        
 

export default Header