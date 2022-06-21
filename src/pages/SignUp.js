import React, { useRef, useState } from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { emailCheckCM, existCheck,idCheckCM,pwCheckCM } from "../shared/common";
import PopupDom from "../components/PopupDom";
import DaumPostcode from "react-daum-postcode";
import {useDispatch} from "react-redux";
import { idCheckDB, signupDB } from "../redux/moduels/user";
import {useNavigate} from "react-router-dom";


const SignUp = () => {
    const id_ref = useRef()
    const pw1_ref = useRef();
    const pw2_ref = useRef();
    const name_ref = useRef();
    const email_ref = useRef();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(navigate);
    
    const [address,setAddress] = useState('');
    const [addressZcode,setAddressZcode] = useState('');

    //주소 관리
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
            //props에 있는 closePostCode()함수실행
            
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
   
    const CheckId= () => {
        console.log(id_ref.current.value);
        if(idCheckCM(id_ref.current.value)) {
            dispatch(idCheckDB({id:id_ref.current.value}))
        }
    }

    const signUpCheck = () => {
        if(!pwCheckCM(pw1_ref.current.value,pw2_ref.current.value)){
            return false;
        }else if(!existCheck(name_ref.current.value,"이름을")){
            return false;
        }else if(!emailCheckCM(email_ref.current.value)){
            return false;
        }
        // return true;
        dispatch(signupDB({
            id:id_ref.current.value,
            pw:pw1_ref.current.value,
            name:name_ref.current.value,
            email:email_ref.current.value,
        },() => navigate("/")
        ))
    };
    
    return (
        <WholeContainer>
        <Container>
            <SignUpText>회원가입</SignUpText>
            <RequiredInput><SpanRed>*</SpanRed>필수입력사항</RequiredInput>
            <Line/>
            <InputBox>
                <InputTable>
                    <tr>
                        <td>아이디<SpanRed>*</SpanRed></td>
                        <td><Input 
                        type="text"
                        placeholder="6~12자의 영문 혹은 영문과 숫자를 조합"
                        ref={id_ref}
                        /></td>
                        <td><button style={{
                            width:"100%",
                            height:"42px",
                            border: "1px solid #5f0080",
                            background: "#fff",
                            fontWeight: "600",
                            fontSize: "14px",
                            cursor: "pointer",
                            color: "#5f0080",
                    }} 
                        onClick={CheckId}                    
                    >중복확인</button></td>
                    </tr>
                    <tr>
                        {/* 비밀번호 타입 패스워드로 바꾸기 */}
                        <td>비밀번호<SpanRed>*</SpanRed></td>
                        <td><Input 
                        type="text"
                        placeholder="비밀번호를 입력해주세요"
                        ref={pw1_ref}
                        /></td>

                    </tr>
                    <tr>
                        <td>비밀번호확인<SpanRed>*</SpanRed></td>
                        <td><Input 
                        type="text"
                        placeholder="비밀번호를 한번 더 입력해주세요"
                        ref={pw2_ref}
                        /></td>
                    </tr>
                    <tr>
                        <td>이름<SpanRed>*</SpanRed></td>
                        <td><Input 
                        type="text"
                        placeholder=" 이름을 입력해주세요"
                        ref={name_ref}
                        /></td>
                    </tr>
                    <tr>
                        <td>이메일<SpanRed>*</SpanRed></td>
                        <td><Input 
                        type="text"
                        placeholder="예: maketkurly@kurly.com"
                        ref={email_ref}
                        /></td>
                    </tr>
                    <tr>
                        <td>주소<SpanRed>*</SpanRed></td>
                        <td>
                            <div style={{  
                                display: "flex",
                                flexDirection: "column",
                                }}>
                            { !address ? (
                                <>
                                <button style={{
                                    width: "82%",
                                    height: "40px",
                                    margin: "0 0 0 50px",
                                    padding: "0 0 0 10px",
                                    border: "1px solid #5f0080",
                                    background: "#fff",
                                    fontWeight: "600",
                                    fontSize: "14px",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#5f0080",
                                    }}
                                    onClick={openPostCode}
                                    >
                                        <span><SearchIcon/></span>
                                        주소검색</button>
                                <div id="popupDom">
                                    {isPopupOpen && (
                                        <PopupDom>
                                            <PopupPostCode/>
                                        </PopupDom>
                                    )
                                    }
                                </div></>):(
                                <AddressDiv>  
                                    배송지:{address},{addressZcode}
                                </AddressDiv>)
                                    }
                                <div style={{
                                    fontSize: "13px",
                                    margin: "0 auto",
                                }}
                                >배송지에 따라 상품 정보가 달라질 수 있습니다.</div>
                            </div>
                        </td>
                    </tr>
                </InputTable>
            </InputBox>
            <div style={{
                display: "flex",
                justifyContent: "center",
                margin: "30px"
            }}><Button onClick={signUpCheck} >가입하기</Button>
            </div>          
        </Container>
        </WholeContainer>
    )
}

export default SignUp;

const WholeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10vh 0 0 0;
`;
const Container = styled.div`
    min-width: 45%;
`;

const SignUpText = styled.div`
    display: flex;
    justify-content: center;
    font-size: x-large;
    font-weight: 600;
`;
const SpanRed = styled.span`
    color: red;
`;
const Line = styled.span`
    width: 100%;
    background: #272727;
    height: 2px;
    display: block;
    margin: 5px 0;
`;
const RequiredInput = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const InputBox = styled.div`
    display: flex;
`;
const InputTable = styled.table`
    width: 100%;
    margin: 10px 0 0 0;
    // background: blue;
    & tr {
        font-size: 15px;
        font-weight: 500;
    }
    & td {
        padding: 20px 0;
        // background: #fff;
    }
    & td:nth-child(1) {
        font-size: 15px;
        font-weight: 600;
        display: flex;
        justify-content: center;
        padding: 30px 0 0 0;
    }
    
    & td:nth-child(3) {
        width: 20%;;
    }
`;

const Input = styled.input`
    width: 80%;
    height: 40px;
    border-radius: 4px;
    border: 2px solid #c0c0c0;
    margin: 0 0 0 50px;
    padding: 0 0 0 10px;
`;
const AddressDiv =  styled.div`
    border: 2px solid #c0c0c0;
    width: 80%;
    height: 40px;
    margin: 0 0 0 50px;
    padding: 0 0 0 10px;
    color: #554949;
    font-size: 13px;
    font-weight: 500;
`;
const Button = styled.button`
    min-width: 40%;
    height: 50px;
    margin: 0 0 0 23px;
    background: #5f0080;
    color: #fff;
    border: 1px solid #5f0080;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`;





