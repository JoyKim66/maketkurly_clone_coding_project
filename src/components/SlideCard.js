import React from "react";
import styled from "styled-components";

const SlideCard = ({card}) => {
    // console.log('card',card);
    return(
        <CardDiv>
        <ImgDiv>
            <CartImg src="https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/cart_white_45_45.svg"/>
            <Img
            src={card.src}/>
        </ImgDiv>
        <AltDiv>{card.alt}</AltDiv>
        <PriceDiv>{card.price}</PriceDiv>
        
        </CardDiv>

    )
}

export default SlideCard;
const CardDiv =styled.div`
    display: flex;
    flex-direction: column;
`;
const ImgDiv = styled.div`
    display: flex;
    background: #fff;
    position: relative;
`;
const CartImg = styled.img`
    position: absolute;
    top: 80%;
    left: 75%;
`;
const Img = styled.img`
    width: 93%;
    margin: auto;
`;
const AltDiv = styled.div`
    width: 93%;
    margin: 15px 2px 0 auto;
    font-size: large;
    background: #fff;
`;
const PriceDiv = styled.div`
    width: 93%;
    margin: 13px 2px 0 auto;
    font-size: large;
    font-weight: 500;
    background: #fff;

`;