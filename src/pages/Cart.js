import React from "react";
import styled from "styled-components";
import CartList from "../components/CartList";

const Cart = () => {
    return (
        <>
            <MainText>장바구니</MainText>
            <Container>
            <CartListDiv><CartList/></CartListDiv>
            <PayInfoDiv>PayInfo</PayInfoDiv>
            </Container>
        </>
        
    )
}

export default Cart;

const MainText =  styled.div`
    font-size: 29px;
    font-weight: 500;
    text-shadow: black 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10vh 0 20vh 0;
`;
const Container = styled.div`
    display: flex;
    justify-content: center;
`;
const CartListDiv = styled.div`
    width: 40%;
    background: #eee;
`;
const PayInfoDiv = styled.div`
    width: 20%;
    background: beige;
`; 