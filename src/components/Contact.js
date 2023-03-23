import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'

const Contact =()=>{
    return(
        <Container maxWidth="md">
            <div className='contact'>
                <h1 style={{fontSize:70, fontFamily:'Quicksand-SemiBold'}}>Get In Touch</h1>
                <p>I’m currently searching for opportunities for a front or back -end developer role.<br></br>
            If there is any vacancy my inbox is always open. Whether you have any further questions or just want to say hi,
            I’ll try my best to get back to you!</p><br></br>
            <Stack spacing={2} direction="row">
                <Button >Get in touch </Button>
            </Stack>
            </div>
        </Container>
    )
}

export default Contact