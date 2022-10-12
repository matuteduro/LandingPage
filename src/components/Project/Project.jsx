import React from 'react'
import './Project.css'
import Project1 from '../../img/project4.jpg'
import earn from '../../img/earn.png'
import { motion } from 'framer-motion'



const Project = () => {
  return (
    <div className='project component__space' id='Project'>
        <div className='heading'>
            <h1 className='heading' data-aos="flip-in">We do it for you</h1>
            <p className='heading p__color' data-aos="fade-up">Our team is ready to seek for your new opportunities</p>
            <br />
        </div>
        <div className='container'>
            <div className='column__project'>
                <div className='col__4'>
            <motion.img
                            src={earn}
                            className='earn__img'
                            alt=""
                            data-aos="fade-up"
                            data-aos-once="false"
                        />
                    <div className='project__box pointer relative'>
                        <div className='project__box__img pointer relative'>
                            <div className='project__box__img'>
                                <img src={Project1} className="project__img" alt="" />
                            </div>
                            <div className='mask__effect'></div>
                        </div>
                        <div className='project__meta absolute'>
                            <h5 className='project__text'></h5>
                            <h4 className='project__text'>Lorem</h4>
                            <a href="Project" className='project__btn'>View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project