import React, {useEffect, useRef} from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
// ----------------------
import './BannerSliderTwo.scss'
// images
// import image1 from '../../images/banner-mobile/Frame 30.png'
// import image2 from '../../images/banner-mobile/Frame 31.png'
// import image3 from '../../images/banners/Frame 5.png'
import arrowRight from '../../images/right-arrow.png'
import arrowLeft from '../../images/left-arrow.png'

export default function BanerSliderTwo() {
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
    <div className='slider-wrapTwo'>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      ref={swiperRef}
      spaceBetween={0}
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
      <SwiperSlide>
        <div className='cc-imgOne'>
          <div className='cc-overlay'>
          A HAPPY MARRIAGE IS THE <br/>
UNION OF TWO GOOD FORGIVERS.
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className='cc-imgTwo'>
        <div className='cc-overlay'>
        The best thing to hold <br/>
onto in life is each other.
        </div>
      
        </div></SwiperSlide>
        <SwiperSlide><div className='cc-imgThree'>
        <div className='cc-overlay'>
        Happy birthday to the <br/>
cutest little bundle of joy!
        </div>
      
        </div></SwiperSlide>
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
