import React, { useState } from "react";
import styled from "styled-components";
import cartImg from "../elements/cartImg";

import PopupDom from "./PopupDom";
import SearchIcon from '@mui/icons-material/Search';

import DaumPostcode from "react-daum-postcode";

const CartProductEach = () => {
    console.log("카트목록" ,cartImg)
    const [quantity,setQuantity] = useState(1);
    const [price,setPrice] = useState(0);
    const [totalPrice,setTotalPrice] = useState(0);


    //컴포넌트 합친부분
     //금액 상태관리
     const [productPrice,setProductPrice] = useState(0);
    //  const [totalPrice,setTotalPrice] = useState(0);
 
     //주소 상태 관리
     const [address,setAddress] = useState('');
     const [addressZcode,setAddressZcode] = useState('');
 
     
         //팝업창 상태관리 
         const [isPopupOpen,setIsPopupOpen] = useState(false);
     
         //팝업창 열기
     const openPostCode = () => {
         setIsPopupOpen(true);
     }
     //팝업창 닫기
     const closePostCode = () => {
         setIsPopupOpen(false)
     }
     // 추후 분리예정....
     const PopupPostCode = () => {
         // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
         const onCompletePost = (data) => {
             let fullAddress = data.address;
             let extraAddress = ''; 
     
             if (data.addressType === 'R') {
               if (data.bname !== '') {
                 extraAddress += data.bname;
               }
               if (data.buildingName !== '') {
                 extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
               }
               fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
             }
             console.log(data)
             //주소
             console.log(fullAddress)
             //우편번호
             console.log(data.zonecode)
     
             setAddress(fullAddress);
             setAddressZcode(data.zonecode)
             closePostCode();
         }
 
         const postCodeStyle = {
             display: "block",
             position: "absolute",
             top: "10%",
             width: "500px",
             height: "400px",
             padding: "7px",
           };
 
         return(
             <div>
                 <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} />
             </div>
         )
     }

    return (
        <div>
        <CartListBox>
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
        </CartListBox>

        {/* 합친부분 */}
        <PayInfoDiv>
        <DestinationContainer>
            <Destination>배송지</Destination>
            {!address ? (
            <DestinationTxt><span style={{color:"#5f0080"}}>배송지를 입력</span>하고 
                <br/>배송유형을 확인해보세요!
            </DestinationTxt>
            ):(
            <DestinationTxt>{address},{addressZcode}</DestinationTxt>
            )}
            <SearchButton onClick={openPostCode}>
            <span><SearchIcon style={{width:"70%"}}/></span>
                주소검색
            </SearchButton>
            <div id="popupDom">
                {isPopupOpen && (
                    <PopupDom>
                        <PopupPostCode/>
                    </PopupDom>
                )
                }
            </div>
        </DestinationContainer>
        
        <PayContainer>
            <PayDiv>
                <div>상품금액</div>
                <div>{productPrice}원</div>
            </PayDiv>
            <PayDiv>
                <div>상품할인금액</div>
                <div>0원</div>
            </PayDiv>
            <PayDiv>
                <div>배송비</div>
                <div>0원</div>
            </PayDiv>
            <hr/>
            <PayDiv>
                <div>결제예정금액</div>
                <div>{totalPrice}원</div>
            </PayDiv>
        </PayContainer>
        <div>
            <OrderButton>주문하기</OrderButton>
        </div>
        <NoticeDiv>
            <span>⚬ [배송준비중] 이전까지 주문 취소 가능합니다.</span>
            <span>⚬ [마이컬리 >  주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.</span>
        </NoticeDiv>
        </PayInfoDiv>

    </div>    
    )
}

export default CartProductEach;
const CartListBox = styled.div`
    border-top: 1px solid #333;
    border-bottom: 1px solid #f4f4f4;
`;

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
//payinfo style
const PayInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
`; 
const DestinationContainer = styled.div`
    padding: 20px;
    border: 1px solid #f2f2f2
`;
const PayContainer = styled.div`
    padding: 20px;
    border: 1px solid #f2f2f2;
    background: #fafafa;

    & div {
        padding: 0 0 10px 0;
    }
    & :nth-child(5) {
        {
        padding: 20px 0;
    }
`;
const PayDiv = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    font-weight: 500;
    text-shadow: black 0 0 0;
`; 

const Destination = styled.div`
    background-image: url(https://res.kurly.com/pc/service/cart/2007/ico_location.svg);
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 0 50%;
    padding-left: 24px;
    font-weight: 550;
    font-size: 16px;
`;
const DestinationTxt = styled.div`
    margin: 10px 0;
    font-weight: 550;
`;
const SearchButton = styled.button`
    width: 100%;
    border-radius: 4px;
    height: 35px;
    border: 1px solid #5f0080;
    background: #fff;
    font-weight: 600;
    font-size: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #5f0080;
`;
const OrderButton = styled.button`
    width: 100%;
    height: 50px;
    margin: 15px 0;
    background: #5f0080;
    color: #fff;
    border: 1px solid #5f0080;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`;
const NoticeDiv = styled.div`
    display: flex;
    padding: 30px 10px 60px 10px;
    font-size: 12px;
    color: #616161;
    flex-direction: column;
    font-weight: 500;
    & span {
        padding: 0 0 8px 0;
    }
`;