// Aside
// 작업 중
import React from "react";
import { $CombinedState } from "redux";
import styled, { keyframes } from 'styled-components';

// const goTop = () => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "smooth",
//     });
//   };


// const TopBtn = () => {
//     if (document.querySelector("html").scrollTop > 100) {
//       return <Top onClick={goTop}>위로</Top>;
//     }
  
//   };

const Aside = () => {

    // var win = window;
    // var top = window.scrollTop(); // 현재 스크롤바의 위치값

    // var speed = 500; // 따라다닐 속도
    // var easing = 'linear'; // 따라다니는 방법 linear or swing
    // var layerTopOffset = 650; // 레이어 높이 상한선

    // if( top > 0)
    //     win.scrollTop(layerTopOffset+top);
    // else
    //     win.scrollTop(0);

    
    // window.addEventListener("scroll", (event) => {
    //     let scrollY = this.scrollY;
    //     let scrollX = this.scrollX;
    //     let scrollTop = this.scrollTop;
    //     console.log(scrollY);
    //     console.log(scrollX);
    //     console.log(scrollTop);
    // });

    return (
        <AsideBox>
        </AsideBox>

    );

}

const AsideBox = styled.div`
    // position: sticky;
    // position: absolute;
    position: fixed;
    width: 60px;
    height: 160px;
    top: 280px;
    border: 1px solid #790000;
    padding: 10px;
    // display: inline-block;
    margin-left: 93%;
    margin-right: 16px;
    // float: right;
`;

// const AsideBox = styled.div`
//     position: absolute;
//     width: 60px;
//     height: 160px;
//     top: 280px; // 첫 시작 위치
//     border: 1px solid #790000;
//     padding: 10px;
//     // display: inline-block;
//     margin-left: 93%;
//     margin-right: 16px;
//     // float: right;

    
// `;

export default Aside;


