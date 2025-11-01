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
                                <input id="contact-name" name="name" type="text" placeholder="Name" aria-label="Your name" />
                            </div>
                            <div className="field email">
                                <input id="contact-email" name="email" type="email" placeholder="Email" aria-label="Your email" />
                            </div>
                        </div>
                        <div className="field subject">
                            <input id="contact-subject" name="subject" type="text" placeholder="Subject" aria-label="Subject" />
                        </div>
                        <div className="field textarea">
                            <textarea id="contact-message" name="message" cols="30" rows="10" placeholder="Describe Your Project ..." aria-label="Your message"></textarea>
                        </div>
                        <div className="field genbtn">
                            <button type="submit">Message me</button>
                        </div>
                    </form>

            </div>
        </div>

    </div>
</section>
    )
}

export default Contact