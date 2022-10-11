import React, { useState } from 'react';
import './Home.css';
import rocket from '../../img/rocket.png'
import { AnimateSharedLayout, motion } from "framer-motion"


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
                <h1 className='title'>Durodev</h1>
                <div className={`nav-items ${isOpen && "open"}`} >
                    <a href='/home'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/'>Portfolio</a>
                    <a href='/'>Service</a>
                    <a href='/contact'>Contact</a>
                </div>
                <div className={`nav-toggle ${isOpen && "open"}`} 
                onClick={() => setIsOpen(!isOpen)} >
                    <div className='bar'></div>
                </div>
                </div>
                <div className="container">
                    <div className="home__content">
                        <div className="home__meta">
                            <h2 className='content'>
                                Welcome to
                                <br />
                                <span> Rocket</span>
                                <motion.img   
                                    animate={{ opacity: 1, x: 200, y:-250}}
                                    initial={{ opacity: 0, x:-200}}
                                    transition={{ type: "spring", stiffness: 10 }} 
                                    className='rocket' 
                                    src={rocket} 
                                    alt=''
                                    id='rocket' 
                                />
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Home