// 위로가기 버튼
// 사라졌다가 나타나기 구현 x
import React from "react";
import styled from "styled-components";

const goTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const TopBtn = () => {
  if (document.querySelector("html").scrollTop > 100) {
    return <Top onClick={goTop}>위로</Top>;
  }

};

const Top = styled.button`
  position: fixed;
  width: 40px;
  height: 40px;
  right: 40px;
  bottom: 20px;
  display: block;
  cursor: pointer;
  z-index: 999;
`;

export default TopBtn;
