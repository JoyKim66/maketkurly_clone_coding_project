import React from "react";
import styled from "styled-components";
import CartList from "../components/CartList";
import PayInfo from "../components/PayInfo";

const Cart = () => {
    return (
        <>
            <MainText>장바구니</MainText>
            <Container>
            <CartListDiv><CartList/></CartListDiv>
            <PayInfoDiv><PayInfo/></PayInfoDiv>
            </Container>
        </>
        
    )
}

export default Cart;

const MainText =  styled.div`
    font-size: 29px;
    font-weight: 550;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10vh 0 10vh 0;
`;
const Container = styled.div`
    display: flex;
    justify-content: center;
`;
const CartListDiv = styled.div`
    width: 50%;
`;
const PayInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
`; 