import React from 'react'
import './Project.css'
import Project1 from '../../img/project4.jpg'
import earn from '../../img/earn.png'
import { motion } from 'framer-motion'



const Project = () => {
  return (
    <div className='project component__space' id='project'>
        <div className='heading'>
            <h1 className='heading'>We do it for you</h1>
            <p className='heading p__color'>Our team is ready to seek for your new opportunities</p>
            <br />
        </div>
        <div className='container'>
            <div className='column'>
                <div className='col__4'>
            <motion.img
                            src={earn}
                            className='earn__img'
                            alt=""
                            animate={{ opacity: 1, y: 100 }}
                            initial={{ opacity: 0, y: -1000 }}
                            transition={{ type: "spring", stiffness: 10 }}
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