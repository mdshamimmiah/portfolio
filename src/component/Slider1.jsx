// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Slide1 from '../assets/screencapture-assignment12-cf109-web-app-2023-12-11-01_52_20.png'
import p8 from '../assets/screencapture-assignment12-cf109-web-app-trainer-2023-12-12-00_37_32.png'
import p9 from '../assets/pppppppppp.png'

export default function Silder1() {
    
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
        <SwiperSlide><img className='w-full h-48' src={Slide1} alt="" /></SwiperSlide>
       
        <SwiperSlide><img className='w-full h-48' src={p8} alt="" /></SwiperSlide>
       
        <SwiperSlide><img className='w-full h-48' src={p9} alt="" /></SwiperSlide>
       
        
      </Swiper>
    </>
  );
}