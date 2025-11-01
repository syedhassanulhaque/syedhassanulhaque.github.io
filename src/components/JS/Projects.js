import React from 'react'
import '../CSS/Projects.css'

// Use CDN/placeholder images to avoid missing local assets
const img = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
const project1 = 'https://images.unsplash.com/photo-1550323814-5738b5a4cd61?w=600&auto=format&fit=crop&q=60'
const project2 = 'https://images.unsplash.com/photo-1495197359483-d092478c170a?w=600&auto=format&fit=crop&q=60'
const project3 = 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop&q=60'
const project4 = 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=600&auto=format&fit=crop&q=60'
const project8 = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60'
const project9 = 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=600&auto=format&fit=crop&q=60'
const project10 = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60'
const project11 = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=60'
const project12 = 'https://images.unsplash.com/photo-1517511620798-cec17d428bc0?w=600&auto=format&fit=crop&q=60'
const project13 = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60'
const portfolio1 = 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop&q=60'
const donation = 'https://images.unsplash.com/photo-1478479474071-8a3014d422c8?w=600&auto=format&fit=crop&q=60'

const mech1 = 'https://images.unsplash.com/photo-1581092334707-42cf5113e3d7?w=600&auto=format&fit=crop&q=60'
const mech2 = 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=600&auto=format&fit=crop&q=60'
const mech3 = 'https://images.unsplash.com/photo-1581092919544-0b69f9b80e6b?w=600&auto=format&fit=crop&q=60'
const mech4 = 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=600&auto=format&fit=crop&q=60'
const mech5 = 'https://images.unsplash.com/photo-1581091215367-59ab6d2c80b9?w=600&auto=format&fit=crop&q=60'
const mech6 = 'https://images.unsplash.com/photo-1581091215611-2f7b2652d4a0?w=600&auto=format&fit=crop&q=60'

const Projects=()=>{
    return(
        <section className="projects" id="projects">
            <section>
        <h1>Web Development Projects</h1>
        <div className="project-cards">

        <div className="card">
                <img src={project13} alt="Project Image" />
                <h3>Portfolio Website 2.0 </h3>
                <p>React Web Application, Responsive, Router functionality, </p>
                <a href="/" target="_blank">View Project</a>
            </div>

            <div className="card">
                <img src={portfolio1} alt="Project Image" />
                <h3>Portfolio Website 1.0</h3>
                <p>Single Page, Pure HTML CSS and Javascript based, Portfolio website, responsive</p>
                <a href="https://syedhassanulhaque.github.io/syedhassanulhaq/" target="_blank">View Project</a>
            </div>


        

            <div className="card">
                <img src={project2} alt="Project Image" />
                <h3>Restaurants Website</h3>
                <p>Full stack website, 6 Page website,Bootstrap based, Responsive , User as well as employee login system</p>
                <a href="https://github.com/syedhassanulhaque/TheOasiskitchen" target="_blank">View Project</a>
            </div>
            <div className="card">
                <img src={project3} alt="Project Image" />
                <h3>Equations Solver</h3>
                <p>Single Page, Pure HTML CSS and Javascript based, Linear equation in three variable solver, responsive</p>
                <a href="https://syedhassanulhaque.github.io/linear-equation-in-three-variables/" target="_blank">View Project</a>
            </div>

            <div className="card">
                <img src={donation} alt="Project Image" />
                <h3>Childern's Promise </h3>
                <p>Single Page, Pure HTML CSS and Javascript based, fund raising website, responsive</p>
                <a href="https://syedhassanulhaque.github.io/Payment-Gateway-Integration/" target="_blank">View Project</a>
            </div>
          
           
            <div className="card">
                <img src={project11} alt="Project Image" />
                <h3>Food Delivery Website</h3>
                <p>Single Page, Pure HTML CSS and Javascript based, Food delivery and services based frontend website, responsive</p>
                <a href="https://syedhassanulhaque.github.io/Restaurant-website/" target="_blank">View Project</a>
            </div>

            <div className="card">
                <img src={project1} alt="Project Image" />
                <h3>Gym Website</h3>
                <p>Basic Gym Website, One Contact form ,Pure HTML CSS and Javascript based, responsive, Single Page</p>
                <a href="https://syedhassanulhaque.github.io/fitnessmania/" target="_blank">View Project</a>
            </div>

            <div className="card">
                <img src={project12} alt="Project Image" />
                <h3>Multiplication Table Generator</h3>
                <p>Single Page, Pure HTML CSS and Javascript based, multiplication table generator, responsive</p>
                <a href="https://syedhassanulhaque.github.io/multiplication-table-generator/" target="_blank">View Project</a>
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
                <a href="https://syedhassanulhaque.github.io/SolidWorksModel/links/ballBearing.html" target="_blank">View Project</a>
            </div>
            <div className="card">
                <img src={mech2} alt="Project Image" />
                <h3>Flange Coupling</h3>
                <p>A brief description of the mechanical project goes here.</p>
                <a href="https://syedhassanulhaque.github.io/SolidWorksModel/links/flangeCoupling.html" target="_blank">View Project</a>
            </div>
            <div className="card">
                <img src={mech3} alt="Project Image" />
                <h3>Hinge Assembly</h3>
                <p>A brief description of the miscellaneous project goes here.</p>
                <a href="https://syedhassanulhaque.github.io/SolidWorksModel/links/hingeAssembly.html" target="_blank">View Project</a>
            </div>
            <div className="card">
                <img src={mech4} alt="Project Image" />
                <h3>Robotic Arm</h3>
                <p>A brief description of the miscellaneous project goes here.</p>
                <a href="https://syedhassanulhaque.github.io/SolidWorksModel/links/RoboticArm.html" target="_blank">View Project</a>
            </div>
            <div className="card">
                <img src={mech5} alt="Project Image" />
                <h3>Screw Scissor Lift Mechanism</h3>
                <p>A brief description of the miscellaneous project goes here.</p>
                <a href="https://syedhassanulhaque.github.io/SolidWorksModel/links/ScrewScissorLiftMechanism.html" target="_blank">View Project</a>
            </div>
            <div className="card">
                <img src={mech6} alt="Project Image" />
                <h3> Universal Joint</h3>
                <p>A brief description of the miscellaneous project goes here.</p>
                <a href="https://syedhassanulhaque.github.io/SolidWorksModel/links/universalJoint.html" target="_blank">View Project</a>
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