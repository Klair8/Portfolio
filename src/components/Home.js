import React from 'react'
// import { IconContext } from "react-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGithub,FaLinkedinIn} from 'react-icons/fa';


const Home =()=>{
    return(
        <div className='homePage'>
            <h1>Hello!</h1>
            <h3>I'am Claire Sacuto</h3>
            <h4> Full Stack Developer</h4>
            <FaGithub />
            <FaLinkedinIn/>
        </div>
    )
}

export default Home