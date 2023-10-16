import React from 'react'
import "../Components/Main_Dashboard.css"

function Income({title,icon,price,subpera,percent,backgroundcolor,iconcolor,color,arrowIcon}) {
  return (
    <div className='Main_income'>
      <div className='income_icon' style={{backgroundColor:backgroundcolor}}>
      <i class={icon} style={{color:color}}></i>
      </div>
      <div className='income_text'>
          <p style={{opacity:"0.6"}}>{title}</p>
          <h3>{price}</h3>
          <p><b><span style={{color:iconcolor}}><i class={arrowIcon}></i>{percent}</span></b>{subpera}</p>

      </div>
    </div>
  )
}

export default Income