import React from 'react'
import BanerSlider from '../../components/BanerSlider/BanerSlider'
import BanerSliderTwo from '../../components/BanerSlider/BannerSliderTwo'
import HomeContent  from './HomeContent/HomeContent';
import BestSellerBlock from '../../components/BestSellerBlock/BestSellerBlock';
// import Footer from '../../components/Footer/Footer';

export default function Home() {
  const mobileNav = window.innerWidth < 999;
  return (
    <div className='home-page'>
      <div>{mobileNav ? <BanerSliderTwo/> : <BanerSlider/>}</div>
      <div><HomeContent/></div>
      <div><BestSellerBlock/></div>
      {/* <div><Footer/></div> */}
    </div>
  )
}
// alert(`${window.innerWidth}, ${window.innerHeight}`)