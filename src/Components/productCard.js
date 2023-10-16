import React from 'react'


function ProductCard({img,price,total,stock}) {
  return (
    <div className='total_product_card'>
        <div className='product_images'>
            <img src={img} alt="product"/>
            <div className='product_inner_details'>
            <h5>Abstarct 3D</h5>
            <p>start value has mixed support</p>
            </div>
        </div>
        <div className='product_details'>
            <span>{stock}</span>
            <b><p>{price}</p></b>
            <p>{total}</p>
        </div>
    </div>
  )
}

export default ProductCard