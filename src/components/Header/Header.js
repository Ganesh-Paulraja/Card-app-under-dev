import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.scss'
// images
import logImg from '../../images/Group 12.png'

export default function Header(props) {
  const toClick = (e) => {
    e.preventDefault();
    props.toggleClick();
  }
  return (
    <header className='header-wrap'>
      <div className="menu-wrap">
        <a href='/' onClick={toClick}>
        <svg width="32" height="20" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1H1M17 6H1M17 11H1" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
</svg>

        </a>
      </div>
      <div className='logo-section'>
       <NavLink to="/" className="logo-wrap">
        <img src={logImg} alt='logo'/>
       </NavLink>
      </div>
      <div className="cotact-section">
        <a href="tel:96298 19496" className='phone-wrap'>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z" fill="black"/>
</svg> 
<span>+91 - 96298 19496</span> 
        </a>
        &nbsp; &nbsp;&nbsp; &nbsp;
        <a href="mailto:abc@gmil.com" className='mail-wrap'>
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06H18C18.55 1.69779e-06 19.021 0.196001 19.413 0.588001C19.805 0.980001 20.0007 1.45067 20 2V14C20 14.55 19.804 15.021 19.412 15.413C19.02 15.805 18.5493 16.0007 18 16H2ZM10 8.825C10.0833 8.825 10.171 8.81233 10.263 8.787C10.355 8.76167 10.4423 8.72434 10.525 8.675L17.6 4.25C17.7333 4.16667 17.8333 4.06233 17.9 3.937C17.9667 3.81167 18 3.67434 18 3.525C18 3.19167 17.8583 2.94167 17.575 2.775C17.2917 2.60834 17 2.61667 16.7 2.8L10 7L3.3 2.8C3 2.61667 2.70834 2.61267 2.425 2.788C2.14167 2.96334 2 3.209 2 3.525C2 3.69167 2.03333 3.83767 2.1 3.963C2.16667 4.08833 2.26667 4.184 2.4 4.25L9.475 8.675C9.55834 8.725 9.646 8.76267 9.738 8.788C9.83 8.81334 9.91734 8.82567 10 8.825Z" fill="black"/>
</svg>  <span>rkmcards@gmail.com</span> 
        </a>
      </div>
    </header>
  )
}
