import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className='home' id='Home'>
        <div className='home__bg'>
            <div className='header Navbar'>
                <h1 className='title'>Durodev</h1>
                <div className='nav-items'>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="">Portfolio</a>
                    <a href="">Service</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className='nav-toggle'>
                    <div className='bar'>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home