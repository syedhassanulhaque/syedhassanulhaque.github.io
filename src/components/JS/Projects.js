import React from 'react'
import '../CSS/Projects.css' 
import img from '../Logos/javascript.png'
import project1 from '../Logos/project1.png'
import project2 from '../Logos/project2.png'
import project3 from '../Logos/project3.png'
import project4 from '../Logos/project4.png'
import project8 from '../Logos/project8.png'
import project9 from '../Logos/project9.png'
import project10 from '../Logos/project10.png'
import project11 from '../Logos/project11.png'

import mech1 from '../Logos/mech1.jpeg'
import mech2 from '../Logos/mech2.jpeg'
import mech3 from '../Logos/mech3.jpeg'
import mech4 from '../Logos/mech4.jpeg'
import mech5 from '../Logos/mech5.jpeg'
import mech6 from '../Logos/mech6.jpeg'

import {Link} from 'react-router-dom'


const Projects=()=>{
    return(
        <section className="projects" id="projects">
            <section>
        <h1>Web Development Projects</h1>
        <div className="project-cards">
            <div className="card">
                <img src={project1} alt="Project Image" />
                <h3>Gym Website</h3>
                <p>Basic Gym Website, One Contact form ,Pure HTML CSS and Javascript based, responsive, Single Page</p>
                <a href="#">View Project</a>
            </div>

            <div className="card">
                <img src={project2} alt="Project Image" />
                <h3>Restaurants Website</h3>
                <p>Full stack website, 6 Page website,Bootstrap based, Responsive , User as well as employee login system</p>
                <a href="#">View Project</a>
            </div>
            <div className="card">
                <img src={project3} alt="Project Image" />
                <h3>Equations Solver</h3>
                <p>Single Page, Pure HTML CSS and Javascript based, Linear equation in three variable solver, responsive</p>
                <a href="#">View Project</a>
            </div>
            <div className="card">
                <img src={project4} alt="Project Image" />
                <h3>Quiz Application</h3>
                <p>Single Page, Pure HTML CSS and Javascript based, Basic Mathematical addition subtraction multiplication and division based game, responsive</p>
                <a href="#">View Project</a>
            </div>
            <div className="card">
                <img src={project8} alt="Project Image" />
                <h3>Portfolio Website</h3>
                <p>Wordpress Based Potfolio website, Highly Customized, Elementor</p>
                <a href="#">View Project</a>
            </div>
            <div className="card">
                <img src={project9} alt="Project Image" />
                <h3>Login Page</h3>
                <p>Single Page, Pure HTML CSS and Javascript based,Login Page, Transparent login info section , responsive</p>
                <a href="#">View Project</a>
            </div>
            <div className="card">
                <img src={project10} alt="Project Image" />
                <h3>Portfolio Website</h3>
                <p>Single Page, Pure HTML CSS and Javascript based, Portfolio website, responsive</p>
                <a href="#">View Project</a>
            </div>
            <div className="card">
                <img src={project11} alt="Project Image" />
                <h3>Food Delivery Website</h3>
                <p>Single Page, Pure HTML CSS and Javascript based, Food delivery and services based frontend website, responsive</p>
                <a href="#">View Project</a>
            </div>

         
        </div>
       

    </section>

    <section>
        <h1>Mechanical Projects</h1>
        <div className="project-cards">
            <div className="card">
                <img src={mech1} alt="Project Image" />
                <h3>Ball Bearing</h3>
                <p>A brief description of the mechanical project goes here.</p>
                <a href="#">View Project</a>
            </div>
            <div className="card">
                <img src={mech2} alt="Project Image" />
                <h3>Flange Coupling</h3>
                <p>A brief description of the mechanical project goes here.</p>
                <a href="#">View Project</a>
            </div>
            <div className="card">
                <img src={mech3} alt="Project Image" />
                <h3>Hinge Assembly</h3>
                <p>A brief description of the miscellaneous project goes here.</p>
                <a href="#">View Project</a>
            </div>
            <div className="card">
                <img src={mech4} alt="Project Image" />
                <h3>Robotic Arm</h3>
                <p>A brief description of the miscellaneous project goes here.</p>
                <a href="#">View Project</a>
            </div>
            <div className="card">
                <img src={mech5} alt="Project Image" />
                <h3>Screw Scissor Lift Mechanism</h3>
                <p>A brief description of the miscellaneous project goes here.</p>
                <a href="#">View Project</a>
            </div>
            <div className="card">
                <img src={mech6} alt="Project Image" />
                <h3> Universal Joint</h3>
                <p>A brief description of the miscellaneous project goes here.</p>
                <a href="#">View Project</a>
            </div>
            
        </div>
    </section>

    <section>
        <h1>Miscellaneous Projects</h1>
        <div className="project-cards">
            <div className="card">
                <img src={img} alt="Project Image" />
                <h3>Project Title 1</h3>
                <p>A brief description of the miscellaneous project goes here.</p>
                <a href="#">View Project</a>
            </div>
            <div className="card">
                <img src={img} alt="Project Image" />
                <h3>Project Title 2</h3>
                <p>A brief description of the miscellaneous project goes here.</p>
                <a href="#">View Project</a>
            </div>
           
        </div>
    </section>
        </section>
    )
}

export default Projects