import React from 'react'
import Heading from './Heading'
import "../Components/Main_Dashboard.css"


const bargraphdata=[
  {
    month:'jan',
    height:'11rem',
    backgroundcolor:"#F0E8F9"
  },
  {
    month:'feb',
    height:'8rem',
    backgroundcolor:"#F0E8F9"
  },
  {
    month:'mar',
    height:'16rem',
    backgroundcolor:"#F0E8F9"
  },
  
  {
    month:'apr',
    height:'12rem',
    backgroundcolor:"#F0E8F9"
  },
  {
    month:'may',
    height:'14rem',
    backgroundcolor:"#F0E8F9"
  },
  {
    month:'jun',
    height:'8rem',
    backgroundcolor:"#F0E8F9"
  },
  {
    month:'jul',
    height:'14.5rem',
    backgroundcolor:"#F0E8F9"
  },
  {
    month:'aug',
    height:'17rem',
    backgroundcolor:"blue"
  },
  {
    month:'sep',
    height:'16rem',
    backgroundcolor:"#F0E8F9"
  },
  {
    month:'Oct',
    height:'14rem',
    backgroundcolor:"#F0E8F9"
  },
  {
    month:'Nov',
    height:'13rem',
    backgroundcolor:"#F0E8F9"
  },
  {
    month:'Dec',
    height:'16rem',
    backgroundcolor:"#F0E8F9"
  }
]

function Promote() {
  return (
    <section className='promote_main'>
      <div className='promote_nav'>
          <div className='Promote_heading'>
            <Heading heading="Overview"/>
            <p>Monthely Earning</p>
          </div>
          <div className='PromoteDropdown'>
            <select>
              <option>Quaterly</option>
              <option>Annually</option>
              <option>Weekly</option>
            </select>
          </div>
      </div>
      <div className="bargraph_total">
      {bargraphdata.map((eachBar)=>{
        const {month,height,backgroundcolor}=eachBar;
        return(
          <>
            <div className='bargraph_main'>
              <div className='bargraph' style={{height:height, backgroundColor:backgroundcolor}}></div>
              <h6 className='bargraph_text' style={{opacity:0.7}}>{month}</h6>
            </div> 
          </>
        );
      })}
      </div>
      
    </section>
  )
}



export default Promote