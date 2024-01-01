// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Slide2 from '../assets/brand one.png'
import p4 from '../assets/brand two.png'
import p5 from '../assets/brand tree.png'

export default function Silder2() {
    
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
        <SwiperSlide><img className='w-full h-48' src={Slide2} alt="" /></SwiperSlide>
       
        <SwiperSlide><img className='w-full h-48' src={p4} alt="" /></SwiperSlide>
       
        <SwiperSlide><img className='w-full h-48' src={p5} alt="" /></SwiperSlide>
       
        
      </Swiper>
    </>
  );
}