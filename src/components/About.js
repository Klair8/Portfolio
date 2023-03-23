import React from 'react'


const About =()=>{
    return(
        <div className='about'>
        <h1 style={{fontSize:70, fontFamily:'Quicksand-SemiBold'}}>About Me</h1>
        <p>Recent full stack developer graduate who works with both the front
        and back ends of a website or application. Strong creative and
        analytical skills.
        Team player with an eye for detail. I have a long history of working in the marketing and advertising industry.
        I can provide end-to-end service and can be involved in projects that
        involve databases and building user-facing websites.
        I'm always ready for new challenges and eager to learn more.</p>
       <div className='skills'>
            <div className='skills1'>
                <ul>
                <li>JavaScript </li>
                <li>React /Redux </li>
                <li>Node.js</li>
                <li>PostgreSQL </li>
                <li>RESTful API’s </li>
                <li>HTML / CSS </li>
                <li>GIT/Github</li>
                <li>Bootstrap</li>
                </ul>
            </div>
            <div className='skills2'>
            <ul>
                <li>Native French, Fluent in English and
                    Hebrew</li>
                <li>Teamwork & Problem-Solving </li>
                <li>Transferrable skills</li>
                <li>Proficient in Salesforces, Shopify,
                    SimilarWeb, Illustrator </li>
                 </ul>
             </div>
        </div>
        </div>
    )
}

export default About