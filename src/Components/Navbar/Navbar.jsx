import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
    <header className="site-header">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-4">
            <div className="n-left">
                <div className="n-name"><a href="/">SK</a></div>
                <span>Toggle</span>
            </div>
            </div>
            <div className="col-lg-8">
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#testimonial">Testimonials</a></li>
                    </ul>
                <a  href="mailto:vachhanisweni@gmail.com" className="button">  Contact</a>
            </div>
                </div>
            </div>
        </div>
    </div>
    </header>
  )
}

export default Navbar