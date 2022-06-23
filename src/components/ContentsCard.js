import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { actionCreators as mainActions } from "../redux/moduels/main"


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
    const dispatch = useDispatch();

    //store에서 받아온 데이터 카테고리별로 나누기
    const cardList = useSelector(state=>state.main.card);
    console.log("cardList",cardList);
    const category1 = cardList?.filter((card,idx) => {
        return card.category === "이 상품 어때요?"
    });
    const category2 = cardList?.filter((card,idx) => {
        return card.category === "놓치면 후회할 가격"
    });
    const category3 = cardList?.filter((card,idx) => {
        return card.category === "알뜰하게 장바구니 채우기"
    });
    const category4 = cardList?.filter((card,idx) => {
        return card.category === "지금 가장 핫한 상품"
    });
    const category5 = cardList?.filter((card,idx) => {
        return card.category === "마감세일"
    });
   
    SwiperCore.use([Navigation]);

    useEffect(()=>{
        dispatch(mainActions.getCardListDB());
    },[])
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
                    {category1.map((card,idx)=>(
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
                    {category2.map((card,idx)=>(
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
                    {category3.map((card,idx)=>(
                    <SwiperSlide key={card.id}><SlideCard card={card} /></SwiperSlide>
                    ))}
            </Swiper>
        </Container>

        <MiddleBannerDiv>
        <MiddleBannerImg src="https://img-cf.kurly.com/banner/random-band/pc/img/8ded70f9-bca2-4a70-b290-beb571ff82ab"/>
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
                    {category4.map((card,idx)=>(
                    <SwiperSlide key={card.id}><SlideCard card={card} /></SwiperSlide>
                    ))}
            </Swiper>
        </Container>

        <CategoryText2>
        이것만 담아도 장바구니 뚝딱! >
        </CategoryText2>
        <CategorySubText>장바구니를 한 번에 채울 수 있는 장바구니 필수템!!</CategorySubText>
        <Container>
            <Swiper 
            spaceBetween={0}
            slidesPerView={4}
            navigation={true}
            loop={true}
            modules={[Navigation]}
            >
                    {category5.map((card,idx)=>(
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

