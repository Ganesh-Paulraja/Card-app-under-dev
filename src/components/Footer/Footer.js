import React from 'react'
import phoneIcon from '../../images/footer-images/contact.svg'
import smgIcon from '../../images/footer-images/msg.svg'
import qrIcon from '../../images/footer-images/qr.png'
import './Footer.scss'

export default function Footer() {
  return (
    <div  className='footer-wrap'>
      <h2>CONTACT US</h2>
      <div className='contac-wrap'>
        <div className='mobile-num'>
            <img src={phoneIcon} alt="mobile" /> &nbsp;
          <a href='tel:+91 - 96298 19496'>+91 - 96298 19496</a>
        </div>
        <div className='mail-wrap'>
            <img src={smgIcon} alt="mail" /> &nbsp;
          <a href='rkmcards@gmail.com'>rkmcards@gmail.com</a>
        </div>
        <div className='address-wrap'>
          1st Floor, RKM Complex,<br />
          Near to Water Thank, Peyodu, <br />
          Santhapuram post, <br />Kanay Kumari District.
          <div className='qr-wrap'>
            <img src={qrIcon} alt='qr code' />
          </div>
        </div>
      </div>
    </div>
  )
}
