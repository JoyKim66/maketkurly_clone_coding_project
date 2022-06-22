// 상세페이지 메인
import React from "react";
import styled from "styled-components";
import ProductMain from "./ProductMain";
import ProductDetail from "./ProductDetail";
import queryString from "query-string";
import { useLocation, useParams } from "react-router-dom";

const Detail = (props) => {
  // - params 가져오기
  // /products/{productId}
  // /products/1에서 '1'을 읽음
    const params = useParams();
    const id = params.productId;
//   const location = useLocation();
//   const sch = location.search;
//   console.log(sch);
//   const params = new URLSearchParams(sch);
//   const productId = params.get("productId");
  console.log(id);

  return (
    <DetailWrap>
      <ProductMain id={id} />
      <ProductDetail id={id} />
    </DetailWrap>
  );
};

const DetailWrap = styled.div`
  //   background-color: rgb(0, 0, 0, 0.05);
  width: 1050px;
  margin: 20px auto 60px auto;
`;

export default Detail;
