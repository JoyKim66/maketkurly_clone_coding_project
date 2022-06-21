// 상세페이지 메인
import React from "react";
import styled from "styled-components";
import ProductMain from "./ProductMain";
import ProductDetail from "./ProductDetail";

const Detail = () => {
  return (
    <DetailWrap>
      <ProductMain />
      <ProductDetail />
    </DetailWrap>
  );
};

const DetailWrap = styled.div`
//   background-color: rgb(0, 0, 0, 0.05);
  width: 1050px;
  margin: 20px auto 60px auto;
`;

export default Detail;
