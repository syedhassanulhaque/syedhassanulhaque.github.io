import React from 'react'
import '../CSS/About.css'
import image from '../logo.jpeg'
import {Link} from 'react-router-dom'
const About=()=>{
    return (
        <section className="about" id="about">
        <h1>About me</h1>
    <div className="maxwidth">
        <div className="about-content">
        <div className="about-column2">
                <div className="text">I am Syed Hassanul Haque and I'm a <span className="typing-2"> Web Developer</span></div>
                <p className="info">
                    I'm an enthusiastic learner and who is currently undergraduate engineering student at ZHCET, AMU , constantly working to learn new things and improve my skills to be the best version of myself. I am self motivated. I thrive on challenges and constantly set goals for myself. 
                    I enjoy taking complex problems and turning them into simple and beautiful inteface designs.I also love the logic and structure of coding and also strive to to write elegant code whether it be HTML, CSS , Javascript , jquery or PHP.

                    
            </p>
                    <div className="genbtn"><Link to="/">Download CV</Link></div>
            </div>


            <div className="about-column1">
                <img src={image} alt="" />
            </div>

          

           

        </div>

    </div>

</section>

    )
}

export default About