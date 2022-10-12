import React, { useRef } from "react";
import './Contact.css';
import contactimg from '../../img/contact.png'
import emailjs, { send } from "@emailjs/browser";
import {BsWhatsapp} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_n8rti03', 'template_03qvut8', form.current, '05-BaI8GMfnPSwdlG')
      
      e.target.reset()
    };
    return(
         <div className="contact component__spac" id="Contact">
            <div className="contact__row">
                <div className="col__4">
                    <div className="contact__box" data-aos="fade-right">
                        <div className="contact__meta">
                            <h1 className="hire__text">Did you like it?</h1>
                            <h2 className="hire__text white">
                                I am available for freelance work, check my socials or send me a email:
                            </h2>
                            <div className="socials">
                            <a href="https://github.com/matuteduro" target='_blank' className="icons" ><BsGithub/></a>
                            <a href="https://www.linkedin.com/in/matiasduro/" target='_blank' className="icons" ><BsLinkedin/></a>
                            <a href="mailto:matias_duro@hotmail.com" target='_blank' className="icons" ><AiOutlineMail/></a>
                            <a href="https://api.whatsapp.com/send?phone=5491130850984" className="icons" target='_blank'><BsWhatsapp/></a>
                            </div>
                        </div>
                        <form ref={form} onSubmit={sendEmail}className="input__box">
                            <input type='text' className="contact name" placeholder="Your Full Name" required/>
                            <input type='email' className="contact email" placeholder="Your Email" required/>
                            <textarea name='message' id="message" rows="7" placeholder="Write Your message" required></textarea>
                            <button type="submit" className="view__more contact pointer btn">Submit</button>
                        </form>
                    </div>
                    <img src={contactimg} alt='' className="contact__img" data-aos="fade-left" data-aos-once="false"/>
                </div>
            </div>
         </div>
    )
}

export default Contact;