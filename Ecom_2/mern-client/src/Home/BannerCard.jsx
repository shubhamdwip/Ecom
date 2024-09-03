import React, {useRef, useState} from 'react';
//Importing Swiper React Components
import {Swiper, SwiperSlide} from 'swiper/react';

//Importing Swiper Style
import 'swiper/css';
import 'swiper/css/effect-cards';

import './BannerCard.css';

//importing required modules
import { EffectCards } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div className='banner'>
        <Swiper
           effect={'cards'}
           grabCursor={true}
           modules={[EffectCards]}
           className='mySwiper'
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
    </div>
  )
}

export default BannerCard