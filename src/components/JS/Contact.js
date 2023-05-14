import React from 'react'
import '../CSS/Contact.css'
import image from '../logo.jpeg'
import {Link} from 'react-router-dom'


const Contact=()=>{
    return(
        <section className="contact" id="contact">
    <div className="max-width">
        <h1>Contact me</h1>
        <div className="contact-content">
            <div className="column left">
                <div className="text">Get In Touch</div>
                <p></p>
                <div className="icons">
                    <div className="rows">
                        <i className="fas fa-user"></i>
                        <div className="info">
                            <div className="head">Name</div>
                            <div className="sub-title">Syed Hassanul Haque</div>
                        </div>
                    </div>
                    <div className="rows">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="info">
                            <div className="head">Address</div>
                            <div className="sub-title">Sulaiman Hall , AMU , Aligarh</div>
                        </div>
                    </div>
                    <div className="rows">
                        <i className="fas fa-envelope"></i>
                        <div className="info">
                            <div className="head">Email</div>
                            <div className="sub-title">syedhassanulhaque@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column right">
                <div className="text">Message me</div>

                    <form action="#" method="post">
                        <div className="fields">
                            <div className="field name">
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className="field email">
                                <input type="email" placeholder="Email " />
                            </div>
                        </div>
                        <div className="field subject">
                            <input type="text" placeholder="Subject" />
                        </div>
                        <div className="field textarea">
                            <textarea  cols="30" rows="10" placeholder="Describe Your Project ..."></textarea>
                        </div>
                        <div className="field genbtn">
                            <a href="#home">Message me</a>
                        </div>
                    </form>

            </div>
        </div>

    </div>
</section>
    )
}

export default Contact