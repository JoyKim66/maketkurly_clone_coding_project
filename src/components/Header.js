// Header.js
// 화면 창 줄어들었을 때 수정
// 로그인시 뷰 필요
import React from "react";
import styled from "styled-components";
import ".././App.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import KurlyLogo from "../static/logo.jpeg";

const Header = () => {
  const islogin = useSelector((state) => state.user.is_login);
  const user = useSelector((state) => state.user.user);
  console.log(islogin, user);

  return (
    <HeaderWrap>
      <HeaderTop>
        <HeaderLeft>
          <PurpleText>샛별·택배</PurpleText> 배송안내 &gt;
        </HeaderLeft>
        <HeaderRight>
          {/* <HeaderMenu>
            <PurpleText>회원가입</PurpleText>
          </HeaderMenu>
          |
          <Link to="/login">
            <HeaderMenu> 로그인</HeaderMenu>
          </Link> */}
          {islogin ? (
            <div>
              <HeaderMenu>
                <PurpleText>${user.username} 님</PurpleText>
              </HeaderMenu>
              | <HeaderMenu> 로그아웃</HeaderMenu>
              |<HeaderMenu>고객센터 &nbsp; &#9662;</HeaderMenu>
            </div>
          ) : (
            <div>
              <Link to="/signup"><HeaderMenu>
                <PurpleText>회원가입</PurpleText>
              </HeaderMenu></Link>
              |
              <Link to="/login">
                <HeaderMenu> 로그인</HeaderMenu>
              </Link>
              |<HeaderMenu>고객센터 &nbsp; &#9662;</HeaderMenu>
            </div>
          )}
          
        </HeaderRight>
      </HeaderTop>
      <Link to="/">
        <LogoImg src={KurlyLogo} />
      </Link>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  font-size: 12.5px;
  color: #666;
`;

const PurpleText = styled.span`
  color: var(--maincolor);
`;

const HeaderTop = styled.div`
  position: relative;
  width: 74%;
  left: 13%;
  right: 13%;
  display: flex;
  //   justify-content: space-around;
  justify-content: space-between;
  margin-top: 10px;
`;

const HeaderLeft = styled.div`
  align-items: center;
  padding: 2px 10px;
  border-radius: 20px;
  border: 1px solid rgb(0, 0, 0, 0.1);
  letter-spacing: -0.1em;
  word-spacing: 0.2em;
  &:hover {
    cursor: pointer;
  }
`;

const HeaderRight = styled.div`
  margin-left: 100px;
`;

const HeaderMenu = styled.span`
  padding: 1px 10px;
  
  &:hover {
    cursor: pointer;
  }
`;

const LogoImg = styled.img`
  width: 110px;
  margin-top: -8px;
`;

export default Header;
