import React from 'react'
// import { IconContext } from "react-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGithub,FaLinkedinIn} from 'react-icons/fa';


const Home =()=>{
    return(
        <div className='homePage'>
            <h1 style={{fontSize:70, fontFamily:'Quicksand-SemiBold'}}>Hello!</h1>
            <h3 style={{fontSize:40, fontFamily:'Quicksand-Medium'}}>I am Claire Sacuto</h3>
            <h4 style={{fontSize:30}}> Full Stack Developer</h4>
           <br></br>
           <br></br>
            <FaGithub style={{fontSize:55}} />  
            <FaLinkedinIn style={{fontSize:55}}/>
        </div>
    )
}

export default Home