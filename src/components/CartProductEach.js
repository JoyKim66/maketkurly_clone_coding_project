import React, { useState } from "react";
import styled from "styled-components";
import cartImg from "../elements/cartImg";

const CartProductEach = () => {
    console.log("카트목록" ,cartImg)
    const [quantity,setQuantity] = useState(1);
    const [price,setPrice] = useState(0);
    const [totalPrice,setTotalPrice] = useState(0);

    return (

        <Container>
            {cartImg && 
                cartImg.map((cart,idx)=>(
                    <>
                    <ContentBox>
                        <div style={{display:"flex"}}>
                            <LabelSt>
                                <InputSt type="checkbox"/>
                            </LabelSt>
                            <Img src={cart.productImage}/>
                        </div>
                        <div>{cart.productName}</div>
                        <ButtonWrap>
                            <MinusBtn/>
                            <Num>{cart.quantity}</Num>
                            <PlusBtn/>
                        </ButtonWrap>
                        <div>{cart.productPrice}원</div>
                        <DeleteBtn></DeleteBtn>
                    </ContentBox>
                    
                    </>
                ))
            
            }
        </Container>
    )
}

export default CartProductEach;

const Container = styled.div`
    margin: 20px 0;
    display: flex;
    overflow: hidden;
    min-height: 128px;
    display: flex;
    flex-direction: column;
    
`;
const ContentBox = styled.div`
    display: flex;
    border-bottom: 1px solid #eee;
    padding: 0 0 15px 0;
    align-items: center;
    justify-content: space-around;
`;
const LabelSt = styled.label`
    user-select: none;
    display: flex;
    align-items: center;
    font-size: 14px;
`;

const InputSt = styled.input`
    appearance: none;
    background-image: url(https://res.kurly.com/mobile/service/common/2003/ico_checkbox_disabled.png);
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: 24px 24px;
    background-position: 50% 50%;
    display: inline-block;
    position: relative;
    width: 24px;
    height: 24px;
    &:checked {
        background-image: url(https://res.kurly.com/mobile/service/common/2006/ico_checkbox_checked.svg);
        background-color: transparent;
        background-repeat: no-repeat;
        background-size: 24px 24px;
        background-position: 50% 50%;
        display: inline-block;
        position: relative;
        width: 24px;
        height: 24px;
    }
`;
const Img = styled.img`
width: 60px;
height: 78px;
`;

const ButtonWrap = styled.div`
    display: flex;
`;
const MinusBtn = styled.button`
    width: 28px;
    height: 28px;
    max-width: 100%;
    display: inline-block;
    text-align: center;
    text-transform: none;
    background-image: url(https://res.kurly.com/pc/ico/2010/ico_minus_on.svg);
    background-size: 30px 30px;
    background-position: center;
    background-color: #fff;
    border: 1px solid #a3a3a3;
    &: hover {
    cursor: pointer;
`;
const Num = styled.div`
    width: 28px;
    height: 26px;
    max-width: 100%;
    text-align: center;
    padding: 0;
    border-top: 1px solid #a3a3a3;
    border-bottom: 1px solid #a3a3a3;
`;
const PlusBtn = styled.button`
    width: 28px;
    height: 28px;
    max-width: 100%;
    display: inline-block;
    text-align: center;
    text-transform: none;
    background-image: url(https://res.kurly.com/pc/service/common/2009/ico_plus_on.svg);
    background-size: 30px 30px;
    background-position: center;
    background-color: #fff;
    border: 1px solid #a3a3a3;
    &: hover {
    cursor: pointer;  
`;
const DeleteBtn = styled.button`
    width: 20px;
    height: 20px;
    max-width: 100%;
    display: inline-block;
    background-color: transparent;
    background-repeat: no-repeat;
    background-image: url(https://res.kurly.com/mobile/service/cart/2007/ico_delete.svg);
    background-size: 20px 20px;
    background-position: center;
    border: 0;
    cursor: pointer;

`;