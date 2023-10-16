import React from 'react'
import "../Components/Main_Dashboard.css"

function Search_box() {
  return (
    <div className='Search_main'>
         <div className='search_icon'>
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className='search_input'>
            <input type='Text' placeholder='Search'/>
        </div>
    </div>
  )
}

export default Search_box