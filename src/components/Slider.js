import React from "react";
import styled from "styled-components";
import sliderImg from "../elements/sliderImg";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import "../navigation.css";

const Slider = () => {
    return(
        <>
             <Swiper 
            navigation={true}
            loop={true}
            modules={[Navigation]}
            >
                    {sliderImg.map((img,idx)=>(
                    <SwiperSlide key={img.id}><img style={{width:"100%"}} src={img.src}/></SwiperSlide>
                    ))}
            </Swiper>
        </>
    )
}

export default Slider;

