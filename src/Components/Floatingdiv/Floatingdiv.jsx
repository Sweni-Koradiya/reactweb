import React from 'react'
import crown from '../../img/crown.png'
import './Floatingdiv.css'

const Floatingdiv = ({image , txt1,txt2}) => {
  return (
    <div className="floatingdiv">
        <img src={image} alt="" />
        <span>
            {txt1} <br/>
            {txt2}
        </span>
    </div>
  )
}

export default Floatingdiv