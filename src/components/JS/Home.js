import React from 'react'
import '../CSS/Home.css'
import {Link} from 'react-router-dom'
const Home=()=>{
    return (
        <section className="hm">
        <div className="home" id="home">
            <div className="maxwidth">
                <div className="homecontent">
                    <div className="text1">Hi, I am </div>
                    <div className="text2">Syed Hassanul Haque</div>
                    <div className="text3">And I'm a  <span className="typing">Web Developer</span></div>
                    <div className="genbtn">
                        <Link to="/">Hire me</Link>
                    </div>
                    
                </div>

            </div>
        </div>
    </section>

    )
}

export default Home