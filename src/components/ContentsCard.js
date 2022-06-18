import React from "react";

import cardImg from "../elements/cardImg";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SlideCard from "./SlideCard";


const ContensCard = () => {
    
    return(
    
    <Swiper
      spaceBetween={0}
      slidesPerView={5}
      navigation={true}
      loop={true}
      pagination={{ clickable: true }}
      modules={[Pagination, Navigation]}
    >
        <div>
            {cardImg.map((card,idx)=>(
            <SwiperSlide key={card.id}><SlideCard card={card} /></SwiperSlide>
            ))}
        </div>
    </Swiper>
    
    )

}

export default ContensCard;