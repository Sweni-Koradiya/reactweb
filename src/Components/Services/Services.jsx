import React from 'react'
import './Services.css'
import Cards from '../Cards/Cards'
import Heartemoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
const Services = () => {
  return (
    <div className="services" id='services'>
    <div className="container">
    <div className="row">
        <div className="col-lg-6">
        <div className="awesome">
            <h2 className="h2-title">My Awesome <span>Services</span></h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            <a href="" className="s-btn button">Download CV</a>
            <div className="blur s-blur" style={{background:"#abf1ff94" ,left:'-3rem', top:'4rem'}}></div>
        </div>
        </div>
        <div className="col-lg-6">
        
        <div className="cards">
        
           <div style={{left:'20rem'}}>
            <Cards emoji = {Heartemoji} heading = {'Design'} detail = { 'Figma, Sketch , Photoshop, Adobe illustrator ,Adobe XD'}/>
           </div>
           <div style={{left:'-2rem' , top:'12rem'}}>
            <Cards emoji = {Glasses} heading = {'Developer'} detail = { 'Html, Css , JavaScript, JavaScript ,React'}/>
           </div>
           <div style={{left:'17rem' , top:'19rem'}}>
            <Cards emoji = {humble} heading = {'UI/UX'} detail = { 'color theory , typography , responsive layout'}/>
           </div>
           <div className="blur s-blur2" style={{background:"var(--purple)", top: '7rem',left: '6rem', filter: 'blur(100px)'}}></div>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Services