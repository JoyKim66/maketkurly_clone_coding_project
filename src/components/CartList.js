import React from "react";
import styled from "styled-components";

const CartList = () => {
    return (
        <>
        <Container>
            <LabelSt>
                <CheckBox><InputSt type="checkbox"/></CheckBox>
                전체선택(0/1)
            </LabelSt>
            <SpanSt>|</SpanSt>
            <DeleteBtnDiv>선택삭제</DeleteBtnDiv>
        </Container>
        <CartListBox>
            <CartListTxt>장바구니에 담긴 상품이 없습니다</CartListTxt>
        </CartListBox>
        <Container>
            <LabelSt>
                <CheckBox><InputSt type="checkbox"/></CheckBox>
                전체선택(0/1)
            </LabelSt>
            <SpanSt>|</SpanSt>
            <DeleteBtnDiv>선택삭제</DeleteBtnDiv>
        </Container>
        </>
    )

}

export default CartList;
const Container = styled.div`
    display: flex;
    display: flex;
    align-items: center;
    padding: 0 0 10px 0;
`; 

const LabelSt = styled.label`
    //텍스트 선택안되게
    user-select: none;
    display: flex;
    align-items: center;
    font-size: 14px;
}

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
const CheckBox = styled.span`
    
`;
const SpanSt = styled.span`
    padding: 0 0 0 20px;
    color: #eee;
`;
const DeleteBtnDiv = styled.div`
    padding: 0 0 0 20px;
    font-size: 14px;
}
`;
const CartListBox = styled.div`
    border-top: 1px solid #333;
    border-bottom: 1px solid #f4f4f4;
`;
const CartListTxt = styled.p`
    width: 40%;
    padding: 115px 0 116px;
    font-weight: 600;
    font-size: 16px;
    margin: auto;
    color: #333;
`;