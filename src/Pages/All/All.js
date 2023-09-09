import React from 'react'
import './All.scss'
import productImg from '../../images/Frame 16.png'

export default function BestSellerBlock() {
  return (
    <div className='best-seller-wrap'>
    <div className='best-seller-block'>
      <h1>ALL DESIGNS</h1>
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
    </div>
    <div className='best-seller-block'>
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
    </div>
    <div className='best-seller-block'>
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
    </div>
    <div className='best-seller-block'>
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
    </div>
    </div>
  )
}
