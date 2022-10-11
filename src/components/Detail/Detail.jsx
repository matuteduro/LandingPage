import React from 'react'
import './Detail.css'
import stand from '../../img/stand.png'
import { motion } from 'framer-motion'

const Detail = () => {
  return (
    <div className='detail component__space' id='Detail'>
        <div className='heading'>
            <h1 className='heading'>What We Offer</h1>
            <p className='heading p__color'>
                There are multiply options of what we can do for you
            </p>
            <p className='heading p__color'>
                Start investing now
            </p>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col__3'>
                    <div className='detail__box pointer'>
                        <div className='icon'>
                        <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
                        </div>
                        <div className='detail__meta'>
                            <h1 className='detail__text'>Business Strategy</h1>
                            <p className='p detail__text p__color'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, mollitia beatae! Officia, repudiandae praesentium. Maiores molestias quae quam harum optio quasi debitis neque unde culpa ullam, modi velit, voluptates aliquam.
                            </p>
                        </div>
                        
                    </div>
                    
                </div>
                <div className='col__3'>
                    <div className='detail__box pointer'>
                        <div className='icon'>
                        <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
                        </div>
                        <div className='detail__meta'>
                            <h1 className='detail__text'>Business Strategy</h1>
                            <p className='p detail__text p__color'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, mollitia beatae! Officia, repudiandae praesentium. Maiores molestias quae quam harum optio quasi debitis neque unde culpa ullam, modi velit, voluptates aliquam.
                            </p>
                        </div>
                        
                    </div>
                    
                </div>
                <motion.img 
                    src={stand} 
                    className='stand' 
                    alt="" 
                    animate={{ opacity: 1, x:0}}
                    initial={{ opacity: 0, x:-700}}
                    transition={{ type: "spring", duration: 5 }} 
                />
            </div>
        </div>
    </div>
  )
}

export default Detail