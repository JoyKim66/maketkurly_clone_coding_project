import React from "react";

import cardImg from "../elements/cardImg";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import "../navigation.css";


// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import SlideCard from "./SlideCard";
import styled from "styled-components";


const ContensCard = () => {
    SwiperCore.use([Navigation]);

    return(
        <>
        <CategoryText>
        이 상품 어때요?
        </CategoryText>
        <Container>
            <Swiper 
            spaceBetween={0}
            slidesPerView={4}
            navigation={true}
            loop={true}
            modules={[Navigation]}
            >
                    {cardImg.map((card,idx)=>(
                    <SwiperSlide key={card.id}><SlideCard card={card} /></SwiperSlide>
                    ))}
            </Swiper>
        </Container>

        {/* 추후 컴포넌트 따로 빼기 
        banner이미지 store에서 받아오기 */}
        <MiddleBannerDiv>
        <MiddleBannerImg src="https://img-cf.kurly.com/banner/random-band/pc/img/e794055a-a3ce-436c-9998-62495971b580"/>
        </MiddleBannerDiv>

        <CategoryText>
        놓치면 후회할 가격 >
        </CategoryText>
        <Container>
            <Swiper 
            spaceBetween={0}
            slidesPerView={4}
            navigation={true}
            loop={true}
            modules={[Navigation]}
            >
                    {cardImg.map((card,idx)=>(
                    <SwiperSlide key={card.id}><SlideCard card={card} /></SwiperSlide>
                    ))}
            </Swiper>
        </Container>

        <CategoryText2>
        이거 사려고 컬리에 가입했다! >
        </CategoryText2>
        <CategorySubText>2022년 신규 고객의 첫구매 제품 TOP 25</CategorySubText>
        <Container>
            <Swiper 
            spaceBetween={0}
            slidesPerView={4}
            navigation={true}
            loop={true}
            modules={[Navigation]}
            >
                    {cardImg.map((card,idx)=>(
                    <SwiperSlide key={card.id}><SlideCard card={card} /></SwiperSlide>
                    ))}
            </Swiper>
        </Container>

        <MiddleBannerDiv>
        <MiddleBannerImg src="https://img-cf.kurly.com/banner/random-band/pc/img/e794055a-a3ce-436c-9998-62495971b580"/>
        </MiddleBannerDiv>

        <CategoryText2>
        마트 갈 시간이 없어요 >
        </CategoryText2>
        <CategorySubText>평일 냉장고를 부탁해</CategorySubText>
        <Container>
            <Swiper 
            spaceBetween={0}
            slidesPerView={4}
            navigation={true}
            loop={true}
            modules={[Navigation]}
            >
                    {cardImg.map((card,idx)=>(
                    <SwiperSlide key={card.id}><SlideCard card={card} /></SwiperSlide>
                    ))}
            </Swiper>
        </Container>
        </>
    )
}

export default ContensCard;

const Container = styled.div`
    display: flex;
    width: 70%;
    height: 500px;
    min-width: 1100px;
    margin: auto;
`;
const CategoryText = styled.div`
    display: flex;
    justify-content: center;
    min-width: 1100px;
    width: 70%;
    margin: auto;
    padding: 50px 0 27px 0;
    font-size: 29px;
    font-weight: 500;
    text-shadow: black 0 0 0;
`;
const CategoryText2 = styled.div`
    display: flex;
    justify-content: center;
    min-width: 1100px;
    width: 70%;
    margin: auto;
    padding: 50px 0 10px 0;
    font-size: 29px;
    font-weight: 500;
    text-shadow: black 0 0 0;
`;
const CategorySubText = styled.div`
    display: flex;
    justify-content: center;
    min-width: 1100px;
    width: 70%;
    margin: auto;
    padding: 0px 0 27px 0;
    font-size: 18px;
    color: #7a7979;
`;

const MiddleBannerDiv = styled.div`
    display: flex;
    width: 70%;
    margin: auto;
`;

const MiddleBannerImg = styled.img`
    width: 100%;
`;

