import React, {useEffect, useRef} from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
// ----------------------
import './BanerSlider.scss'
// images
import image1 from '../../images/banners/Frame 3.png'
import image2 from '../../images/banners/Frame 4.png'
import image3 from '../../images/banners/Frame 5.png'
import arrowRight from '../../images/right-arrow.png'
import arrowLeft from '../../images/left-arrow.png'

export default function BanerSlider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    const timer = setInterval(() => {
      if (swiperInstance && swiperInstance.slideNext) {
        swiperInstance.slideNext();
      }
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='slider-wrap'>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      ref={swiperRef}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: false }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      loop={true}
      autoplay={{ delay: 5000 }}
    >
      <SwiperSlide><img src={image1} alt='banner'/></SwiperSlide>
      <SwiperSlide><img src={image2} alt='banner'/></SwiperSlide>
      <SwiperSlide><img src={image3} alt='banner'/></SwiperSlide>
    </Swiper>

      <div className="swiper-button-next">
        <img src={arrowRight} alt="Next" />
      </div>
      <div className="swiper-button-prev">
        <img src={arrowLeft} alt="Previous" />
      </div>
    </div>
  )
}
//     <img src={image1} alt='banner'/>
//     <img src={image2} alt='banner'/>
//     <img src={image3} alt='banner'/>