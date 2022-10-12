import React from 'react'
import './About.css'
import aboutImg from '../../img/about.png'
import { motion } from 'framer-motion'


const About = () => {

    window.addEventListener('scroll', function () {
        const upToTop = document.querySelector('a.bottom__to__top');
        upToTop.classList.toggle("active", window.scrollY > 0)
    })
    return (

        <div className='about component__space' id='About'>
            <div className='container'>
                <div className='row'>
                    <div className='col__2'>
                        <motion.img
                            animate={{ opacity: 1, x: 0, y:0}}
                            initial={{ opacity: 0, y:-200}}                   
                            src={aboutImg}
                            className='about__img'
                            data-aos="fade-down"
                            data-aos-once="false"
                            alt=""
                        />
                    </div>
                    <div className='col__2' data-aos="fade-left">
                        <h1 className='about__heading'>About Us</h1>
                        <div className='about__meta'>
                            <p className='about__text p__color'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, excepturi dolore illo voluptate id aperiam aspernatur officiis odio dolor saepe! Provident minus fugit enim ullam animi sunt iste fugiat laborum.
                            </p>
                            <div className='about__button d__flex align__items__center'>
                                <a href="#">
                                    <button className='about btn pointer'>Try Now</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About