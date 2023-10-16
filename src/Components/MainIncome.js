import React from 'react'
import Income from './Income'

const incomeData=[
    {
        title:"Earning",
        price:'$198k',
        icon:'fa-solid fa-sack-dollar',
        subpera:'this month',
        percent:'37.8%',
        backgroundcolor:'rgba(106, 248, 171, 0.41)',
        arrowIcon:'fa-solid fa-arrow-up',
        color:'green',
        iconcolor:'green'
    },
    {
        title:"Order",
        price:'$2.4k',
        icon:'fa-solid fa-clipboard-list',
        subpera:'this month',
        percent:'2%',
        backgroundcolor:'rgba(172, 116, 239, 0.41)',
        arrowIcon:'fa-solid fa-arrow-down',
        color:'#b209ea',
        iconcolor:'red'
    },
    {
        title:"Balance",
        price:'$2.4k',
        icon:'fa-solid fa-wallet',
        subpera:'this month',
        percent:'2%',
        backgroundcolor:'rgba(115, 225, 254, 0.41)',
        arrowIcon:'fa-solid fa-arrow-down',
        color:'blue',
        iconcolor:'red'
    },
    {
        title:"Total sale",
        price:'$89k',
        icon:'fa-solid fa-bag-shopping',
        subpera:'this week',
        percent:'11%',
        backgroundcolor:'rgba(255, 52, 170, 0.41)',
        arrowIcon:'fa-solid fa-arrow-up',
        color:'red',
        iconcolor:'green'
    }
]

function MainIncome() {
  return (
    <div className='Mainincome_div'>
        {incomeData.map((Details)=>{
            const{title,price,icon,subpera,percent,backgroundcolor,iconcolor,color,arrowIcon}=Details;
            return(
                <div >
                    <Income title={title} icon={icon} price={price} iconcolor={iconcolor} color={color} arrowIcon={arrowIcon} subpera={subpera} percent={percent} backgroundcolor={backgroundcolor}/>
                </div>
            );
        })}
    </div>
  )
}

export default MainIncome