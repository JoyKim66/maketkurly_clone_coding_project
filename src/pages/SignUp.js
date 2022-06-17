import React from "react";
import styled from "styled-components";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';


const SignUp = () => {
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
                        placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
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
                    }}>중복확인</button></td>
                    </tr>
                    <tr>
                        <td>비밀번호<SpanRed>*</SpanRed></td>
                        <td><Input 
                        type="text"
                        placeholder="비밀번호를 입력해주세요"
                                    /></td>

                    </tr>
                    <tr>
                        <td>비밀번호확인<SpanRed>*</SpanRed></td>
                        <td><Input 
                        type="text"
                        placeholder="비밀번호를 한번 더 입력해주세요"
                        /></td>
                    </tr>
                    <tr>
                        <td>이름<SpanRed>*</SpanRed></td>
                        <td><Input 
                        type="text"
                        placeholder=" 이름을 입력해주세요"
                        /></td>
                    </tr>
                    <tr>
                        <td>이메일<SpanRed>*</SpanRed></td>
                        <td><Input 
                        type="text"
                        placeholder="예: maketkurly@kurly.com"
                        /></td>
                    </tr>
                    <tr>
                        <td>주소<SpanRed>*</SpanRed></td>
                        <td>
                            <div style={{  
                                display: "flex",
                                flexDirection: "column",
                                }}>
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
                                    }}>
                                        <span><SearchIcon/></span>
                                        주소검색</button>
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
            }}><Button>가입하기</Button>
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





