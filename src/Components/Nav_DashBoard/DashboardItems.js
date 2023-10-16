import React from 'react'
import { Link } from 'react-router-dom'



function DashboardItems({tag,img,url}) {
  return (
    <Link to={url} className='tag_div' style={{textDecoration:'none',color:'rgba(255,255,255,0.4)'}}>
        <div className="tag_div1">
        <i className={img}></i>
        <p>{tag}</p>
        </div>
       <div className='tag_arrow_icon'>
       <i class="fa-solid fa-chevron-right"></i>
       </div>
    </Link>
  )
}

export default DashboardItems