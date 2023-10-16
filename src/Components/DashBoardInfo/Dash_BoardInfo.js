import React from 'react'
import MainIncome from '../MainIncome'
import Search_box from '../Search_box'
import Heading from '../Heading'
import Promote from '../Promote'
import Coustmor from '../Coustmor'
import Products from '../Products'


function Dash_BoardInfo() {
  return (
    <>
    <div className='Dashboard_ele1'>
      <Heading heading="Balaji&#128075;,"/>
      <Search_box/>
    </div>
    <MainIncome />
    <div className='Dashboard_ele2'>
      <div className='promote_div'>
        <Promote />
      </div>
      <div className='Customer_div'>
        <Coustmor />
      </div> 
    </div>
    <div className='Products_div'>
      <Products />
    </div>
    </>
  )
}

export default Dash_BoardInfo