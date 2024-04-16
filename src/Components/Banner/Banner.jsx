import React from 'react'
import './Banner.css'
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import instagram from '../../img/instagram.png';
import bannerimg from '../../img/bannerimg.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import Floatingdiv from '../Floatingdiv/Floatingdiv';


const Banner = () => {
  return (
    <div className="intro">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="intro-left">
                    <div className="i-name">
                        <h1 className='h1-title'>Hy! I Am <span>Sweni Koradiya</span></h1>
                        <p>Frontend Developer with high level of experience in web designing and development , producing the quality work</p>

                    </div>
                    <a href='' className="i-btn button">Hire Me</a>
                    <div className="banner-icons">
                        <a href="/"> <img src={github} alt="" /></a>
                        <a href="https://ca.linkedin.com/"> <img src={linkedin} alt="" /></a>
                        <a href="https://www.instagram.com/"> <img src={instagram} alt="" /></a>
                        </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="intro-right">
                    <div className="bannerimg">
                        <img src={bannerimg} alt="" />
                    </div>
                    <div className="glass-emoji" style={{position:'absolute', top:'-8%', left:'-20%',width:'150px'}}>
                    <img src={glassesimoji} alt="" />
                    </div>
                    <div className="img-attributes"  style={{top:'-4%' , left:'68%'}}>
                    <Floatingdiv  image={Crown} txt1='Web' txt2='Developer'/>
                    </div>
                    <div className="img-attributes"  style={{top:'90%' , left:'-15%'}}>
                    <Floatingdiv  image={thumbup} txt1='Best Design' txt2='Award'/>
                    </div>
                    <div className="blur" style={{background:'#edd0ff' , top:'-18%',left:'56%'}}></div>
                    <div className="blur"  style={{background:'#c1f5ff' , top:'17rem',left:'-9%'}}></div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Banner