import React, { useEffect } from "react";
import sliderImg from "../elements/sliderImg";
import { useDispatch } from "react-redux";
import { actionCreators as mainActions } from "../redux/moduels/main"

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import "../navigation.css";

const Slider = () => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(mainActions.getSliderListDB());
    },[])
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

