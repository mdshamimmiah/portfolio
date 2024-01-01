// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Slide3 from '../assets/1.jpg'
import a from '../assets/2.jpg'
import b from '../assets/3.jpg'

export default function Silder3() {
    
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-xl"
      >
        <SwiperSlide><img className='w-full h-48' src={Slide3} alt="" /></SwiperSlide>
       
        <SwiperSlide><img className='w-full h-48' src={a} alt="" /></SwiperSlide>
       
        <SwiperSlide><img className='w-full h-48' src={b} alt="" /></SwiperSlide>
       
        
      </Swiper>
    </>
  );
}