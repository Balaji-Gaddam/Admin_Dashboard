import React from 'react'
import "../Components/Main_Dashboard.css"
import Heading from './Heading'


function Coustmor() {
  return (
    <>
    <div className='Main_Customers'>
      <div className='Customer_nav'>
        <Heading heading="Customers"/>
        <p>Customers that buy products</p>
      </div>
      <div class="circular-progress1">
      <div class="container">
          <div class="circular-progress">
          <div class="circular-progress3">
            <div class="circular-progress4">
            <div class="value-container" >
              <h2>65%</h2>
              <p>Total new</p>
              <p>Customers</p>
            </div>
            </div>
          </div>
        </div>
        </div>
        </div>
    </div>
      </>
  )
}

export default Coustmor