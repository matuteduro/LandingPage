import React from "react";
import './Contact.css';
import contactimg from '../../img/contact.png'

function Contact() {
    return(
         <div className="contact component__spac" id="Contact">
            <div className="contactrow">
                <div className="col__4">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Did you like it?</h1>
                            <h2 className="hire__text white">
                                I am available for freelance work, check my socials or send me a email:
                            </h2>
                            <h2 className="hire__text white">
                                <strong>matias_duro@hotmail.com</strong>
                            </h2>
                        </div>
                        <div className="input__box">
                            <input type='text' className="contact name" placeholder="Your name *" />
                            <input type='text' className="contact email" placeholder="Your Email *" />
                            <input type='text' className="contact subject" placeholder="Write a Subject *" />
                            <textarea name='message' id="message" placeholder="Write Your message" ></textarea>
                            <button className="view__more contact pointer btn">Submit</button>
                        </div>
                    </div>
                    <img src={contactimg} alt='' className="contact__img" />
                </div>
            </div>
         </div>
    )
}

export default Contact;