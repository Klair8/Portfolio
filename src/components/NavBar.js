import React from 'react';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'


const Header =()=>{
  

    return(
      
      <Stack spacing={2} direction="row" >
        <Button sx= {{ color: 'inherit' }} component = {Link} to='/'>C/S</Button>
        {/* color: '#fff'  */}
      <Button variant="outlined" sx= {{ color: 'inherit', borderRadius: 28 , borderColor: 'black' }} component = {Link} to='/'>Home</Button>
      <Button variant="outlined" sx= {{ color: 'inherit', borderRadius: 28 , borderColor: 'black'}} component = {Link} to='/About'>About</Button>
      <Button variant="outlined" sx= {{ color: 'inherit', borderRadius: 28 , borderColor: 'black' }} component = {Link} to='/Projects'>Projects</Button>
      <Button variant="outlined" sx= {{ color: 'inherit', borderRadius: 28 ,borderColor: 'black' }} component = {Link} to='/Contact'>Contact</Button>
      <Button
            onClick={() => {
              window.open("https://drive.google.com/file/d/19BQfxKH2faDkcNChnz9ULXbCL8zUOsg0/view?usp=sharing");
            }}
            sx= {{ color: 'inherit' }} className='resumebtn'><span>Resume</span>
          </Button>
      </Stack>
          );
        }
      

export default Header