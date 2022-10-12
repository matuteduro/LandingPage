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
                            src={aboutImg}
                            className='about__img'
                            data-aos="fade-down"
                            alt=""
                            animate={{ y: 100 }}
                            initial={{ y: -1000 }}
                        />
                    </div>
                    <div className='col__2' data-aos="fade-left">
                        <h1 className='about__heading'>About Me</h1>
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
                <div className="up__to__top__btn">
                    <a href="#" className="bottom__to__top">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-chevron-up white"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About