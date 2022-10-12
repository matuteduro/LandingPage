import React, { useState } from 'react';
import './Home.css';
import rocket from '../../img/rocket.png'
import { motion } from "framer-motion"


function Home() {
  window.addEventListener("scroll", ()=>{
    const header = this.document.queryselector(".header");
    header.classList.toggle("active", window.scrollY > 0)
  });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='home' id='Home'>
        <div className='home__bg'>
            <div className='header Navbar'>
                <h1 className='title'></h1>
                <div className={`nav-items ${isOpen && "open"}`} >
                    <a href='#home'>Home</a>
                    <a href='#About'>About</a>
                    <a href='#Detail'>Detail</a>
                    <a href='#Project'>Service</a>
                    <a href='#Contact'>Contact</a>
                </div>
                <div className={`nav-toggle ${isOpen && "open"}`} 
                onClick={() => setIsOpen(!isOpen)} >
                    <div className='bar'></div>
                </div>
                </div>
                <div className="container">
                    <div className="home__content">
                        <div className="home__meta">
                            <motion.h2 
                                initial={{ opacity: 0, }}
                                animate={{ opacity: 1, }}
                                transition={{ delay: 3 }}
                                className='content'>
                                Welcome to
                                <span> Rocket</span>
                                </motion.h2>
                                <motion.img   
                                    animate={{ opacity: 1, x: 0, y:0}}
                                    initial={{ opacity: 0, x:-700, y:500}}                  
                                    transition={{ type: "spring", stiffness: 10 }} 
                                    className='rocket'
                                    data-aos="fade-down"
                                    data-aos-once="true"
                                    src={rocket} 
                                    alt=''
                                    id='rocket' 
                                />
                                <img src={rocket} className='mobileImg' id="mobile"/>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Home