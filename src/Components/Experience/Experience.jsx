import React from 'react'
import './Experience.css'
const Experience = () => {
  return (
    <div className="experience">
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="achievement">
                    <div className="circle">8+</div>
                    <h2>years</h2>
                    <h3>Experience</h3>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="achievement">
                    <div className="circle">18+</div>
                    <h2>completed</h2>
                    <h3>Projects</h3>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="achievement">
                    <div className="circle">5+</div>
                    <h2>Companies</h2>
                </div>
            </div>
        </div>
    </div>
    </div>  )
}

export default Experience