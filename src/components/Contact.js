import React from 'react'
import {useState} from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'

const Contact =()=>{
  const [showLinks,setShowLinks] = useState(false)
  

  const handleButtonClick = () => {
    setShowLinks(true);
  }
    return(
        <Container maxWidth="md">
            <div className='contact'>
                <h1 style={{fontSize:70, fontFamily:'Quicksand-SemiBold'}}> Get In Touch</h1>
                <p>I’m currently searching for opportunities for a front or back -end developer role.<br></br>
            If there is any vacancy my inbox is always open. Whether you have any further questions or just want to say hi,
            I’ll try my best to get back to you!</p><br></br>
            <Stack spacing={2} direction="row">
            <Button onClick={handleButtonClick}> Get in touch </Button>
          {
          showLinks && (
            <>
              <Button href="mailto:clsacuto@example.com">Email me</Button>
              <Button href="https://www.linkedin.com/in/claire-sacuto/">Visit my LinkedIn</Button>
            </>
          )}
            </Stack>
            </div>
        </Container>
    )
}

export default Contact