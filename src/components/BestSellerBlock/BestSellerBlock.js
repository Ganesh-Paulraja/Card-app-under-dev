import React from 'react'
import './BestSellerBlock.scss'
import productImg from '../../images/Frame 16.png'

export default function BestSellerBlock() {
  return (
    <div className='best-seller-wrap'>
    <div className='best-seller-block'>
      <h1>Best Seller</h1>
      <div className='product-wrap'>
      <div className='product'>
        <img src={productImg} alt='product'/>
      </div>
      <div className='product'>
        <img src={productImg} alt='product'/>
      </div>
      <div className='product'>
        <img src={productImg} alt='product'/>
      </div>
      <div className='product'>
        <img src={productImg} alt='product'/>
      </div>
      </div>
      <div className='shop-btn'>
        <button>SHOW MORE</button>
      </div>
    </div>
    <div className='best-seller-block'>
      <h1>Expensive Designs</h1>
      <div className='product-wrap'>
      <div className='product'>
        <img src={productImg} alt='product'/>
      </div>
      <div className='product'>
        <img src={productImg} alt='product'/>
      </div>
      <div className='product'>
        <img src={productImg} alt='product'/>
      </div>
      <div className='product'>
        <img src={productImg} alt='product'/>
      </div>
      </div>
      <div className='shop-btn'>
        <button>SHOW MORE</button>
      </div>
    </div>
    <div className='best-seller-block'>
      <h1>Affordable Designs</h1>
      <div className='product-wrap'>
      <div className='product'>
        <img src={productImg} alt='product'/>
      </div>
      <div className='product'>
        <img src={productImg} alt='product'/>
      </div>
      <div className='product'>
        <img src={productImg} alt='product'/>
      </div>
      <div className='product'>
        <img src={productImg} alt='product'/>
      </div>
      </div>
      <div className='shop-btn'>
        <button>SHOW MORE</button>
      </div>
    </div>
    </div>
  )
}
