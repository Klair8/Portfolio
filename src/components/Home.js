import React from 'react'
import Photo2 from '../assets/Photo2.png'
import { FaGithub,FaLinkedinIn} from 'react-icons/fa';


const Home =()=>{
    return(
        <div className='homePage' >
        <div className='txtHomepage'>
            <h1 style={{fontSize:70, fontFamily:'Quicksand-SemiBold'}}>Hello!</h1>
            <h3 style={{fontSize:40, fontFamily:'Quicksand-Medium'}}>I am Claire Sacuto</h3>
            <h4 style={{fontSize:30}}> Full Stack Developer</h4>
            <br></br>
            <br></br>
            <div className='links'>
                <a href="https://github.com/Klair8">
                    <FaGithub style={{fontSize:55, paddingRight:'30px'}}/>  
                </a>
                <a href="https://www.linkedin.com/in/claire-sacuto/">
                    <FaLinkedinIn style={{fontSize:55}}/>
                </a>
            </div>
        </div>
         <div className='imgHomepage'>
         <img src={Photo2}
              style={{width: 450, height: 450, borderRadius: 450/ 2}} 
              />
          </div>
          </div>
    )
}

export default Home