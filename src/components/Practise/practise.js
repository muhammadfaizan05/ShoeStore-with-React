import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

import { Link } from "react-router-dom";
import "./practise.css";

// import required modules
// import { Pagination } from "swiper";

export default function Practise() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Link to='/shoes'>  <img src="Pics/Casual Shoes 1.png" className="artimg"></img> </Link></SwiperSlide>
        <SwiperSlide><Link to='/shoes'><img src="Pics/Casual Shoes 2.png" className="artimg"></img></Link></SwiperSlide>
        <SwiperSlide><Link to='/shoes'><img src="Pics/Casual Shoes 3.png" className="artimg"></img></Link></SwiperSlide>
        <SwiperSlide><Link to='/shoes'><img src="Pics/female9.png" className="artimg"></img></Link></SwiperSlide>
        <SwiperSlide><Link to='/shoes'>  <img src="Pics/child3.png" className="artimg"></img> </Link></SwiperSlide>
        <SwiperSlide><Link to='/shoes'><img src="Pics/female14.png" className="artimg"></img></Link></SwiperSlide>
        <SwiperSlide><Link to='/shoes'><img src="Pics/child1.png" className="artimg"></img></Link></SwiperSlide>
        <SwiperSlide><Link to='/shoes'><img src="Pics/mensclassic8.png" className="artimg"></img></Link></SwiperSlide>
        {/* <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}





