import React, { useState } from "react";
// import keyimage from "../Nav_DashBoard/key-square.1024x1022.png"
import DashboardItems from "./DashboardItems";
const data=[
    {
        tag:"Dashboard",
        img:'fa-solid fa-key',
        url:'/'
    },
    {
        tag:"Products",
        img:'fa-solid fa-cube',
        url:'/Products'
    },
    {
        tag:'Customers',
        img:"fa-solid fa-user",
        url:'/Customers'
    },
    {
        tag:'Income',
        img:"fa-solid fa-circle-dollar-to-slot",
        url:'/Income'
    },
    {
        tag:'Promote',
        img:"fa-solid fa-chart-simple",
        url:'/Promote'
    },
    {
        tag:'Help',
        img:"fa-solid fa-circle-question",
        url:'/Help'
    },
]


function Dash_Board() {
  const [state,setstate]=useState({clicked:true})
  const handleClick=()=>{
    setstate({clicked:!state.clicked})
  }
  return (
    <>
    <div className='Main_Dashboard '>
        <div className='Child_Dashboard'>
            <div className='Dash_Head'>
                <i class="fa-brands fa-uikit"></i>
                <h2>Dashboard</h2> 
                <div className='menuIcons' onClick={handleClick}>
                <i className={state.clicked ?  "fas fa-bars" :"fas fa-times"}></i>
        </div> 
            </div>
           
            <div className={state.clicked?'Dash_Child':"Dash_child active"}>
                {data.map((eachtag)=>{
                    const{tag,img,url}=eachtag;
                    return(<>
                        <DashboardItems tag={tag} img={img} url={url}/>
                    </>);
                })}
            </div>
        </div>
        <div className={state.clicked?'Delicon':'main_login'} >
            <div className="Login_main">
            <div className="login_details">
                <img src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" alt=""/>
                <div className="login_text">
                    <h6>Balaji</h6>
                    <p>Project Manager</p>
                </div>
            </div>
                <div className="login_icon">
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
            </div>
            </div>    
    </div>

    </>
  )
}

export default Dash_Board;