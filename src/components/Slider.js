import React, { useEffect } from "react";
import sliderImg from "../elements/sliderImg";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as mainActions } from "../redux/moduels/main"

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import "../navigation.css";

const Slider = () => {
    const dispatch = useDispatch();

    const sliderList = useSelector(state=>state.main.slider.upsideImage);
    console.log("sliderList",sliderList);
    
    useEffect(()=>{
        dispatch(mainActions.getSliderListDB());
    },[])
    return(
        <>
        {sliderList &&
             <Swiper 
            navigation={true}
            loop={true}
            modules={[Navigation]}
            >
                    {sliderList.map((img,idx)=>(
                    <SwiperSlide key={img.id}><img style={{width:"100%"}} src={img}/></SwiperSlide>
                    ))}
            </Swiper>
            }
        </>
    )
}

export default Slider;

