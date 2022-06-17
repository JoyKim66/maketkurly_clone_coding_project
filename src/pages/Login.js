import React from "react";
import styled from "styled-components";

const Login = () => {
    return(
        <WholeContainer>
            <Container>
                <LoginText>로그인</LoginText>
                <InputBox>
                    <Input 
                    type="text"
                    placeholder="아이디를입력해주세요"
                    />
                    <Input 
                    type="text"
                    placeholder="비밀번호를 입력해주세요"
                    />
                    <LoginWrap>
                        <span>
                            <span><input type="checkbox"/></span>
                            보안접속
                        </span>
                        <span>아이디찾기|비밀번호찾기</span>
                    </LoginWrap>
                    <Button>로그인</Button> 
                    <Button2>회원가입</Button2>
                </InputBox>
            </Container>
        </WholeContainer>
    )
}

export default Login;

const WholeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20vh 0 0 0;
`;
const Container = styled.div`
    min-width: 45%;
`;
const LoginText = styled.div`
    display: flex;
    justify-content: center;
    font-size: x-large;
    font-weight: 600;
    margin: 30px 0;
`;
const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Input = styled.input`
    width: 50%;
    height: 40px;
    border-radius: 4px;
    border: 2px solid #c0c0c0;
    margin: 8px auto;
`;
const LoginWrap = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    font-size: 13px;
    color: #595959;
    margin: 5px 0 20px 0;
`;
const Button = styled.button`
    width: 50%;
    height: 50px;
    margin: 8px auto;
    background: #5f0080;
    color: #fff;
    border: 1px solid #5f0080;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`;
const Button2 = styled.button`
    width: 50%;
    height: 50px;
    margin: 8px auto;
    background: #ffffff;
    color: #5f0080;
    border: 1px solid #5f0080;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`;