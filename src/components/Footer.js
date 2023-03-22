import React from 'react'
import {Container, Row,Col} from 'react-bootstrap'

const Footer =()=>{
    return(
        <Container className='footer'>
            <Row>
                <Col className='text-center py-3'>
                © Copyright 2023
                Design and built by Claire Sacuto
                </Col>
            </Row>

        </Container>

    )
}

export default Footer