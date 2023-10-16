import React from 'react'
import Heading from './Heading'
import Search_box from './Search_box'
import ProductCard from './productCard'

const productDetails=[
  {
    img:'https://img.freepik.com/premium-photo/3d-illustration-blue-abstract-background-wallpaper_258743-115.jpg',
    stock:'32 in stock',
    price:'$45.99',
    total:'20'
  },
  {
    img:'https://a-static.besthdwallpaper.com/windows-11-light-blue-abstract-background-wallpaper-1440x1080-106358_22.jpg',
    stock:'20 in stock',
    price:'$45.99',
    total:'20'
  }
]

function Products() {
  return (
    <section className='total_product'>
    <div className='Product_nav'>
      <div className='Product_heading'>
        <Heading heading="Product Sell"/>
      </div>
      <div className='Product_text'>
        <Search_box/>
        <select>
          <option>last 30 days</option>
          <option>last Week</option>
          <option>last year</option>
        </select>
      </div>
    </div>
    <div className='Product_titles'>
    <div className='product_name'>Product name</div>
    <div className='Product_Details'>
      <p>Stock</p>
      <p>Price</p>
      <p>Total Sales</p>
    </div>
    </div>
    <hr style={{opacity:0.3,margin:10}}/>
    {productDetails.map((eachproduct)=>{
          const {img,price,stock,total}=eachproduct;
          return(
            <ProductCard img={img} price={price} stock={stock} total={total}/>
          );
    })}

    </section>
  )
}

export default Products