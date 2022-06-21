// 상세페이지 상세정보
// 후기쓰기 버튼 css
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Review from "./Review";
import detailImg from "../../static/detail.png";

const ProductDetail = () => {
  const [item, setItem] = useState([
    {
      productId: 1,
      productName: "[폴 바셋] 바리스타 돌체라떼 300ml",
      subTitle: "간편하게 맛보는 달콤한 풍미",
      imageUrl:
        "https://m.upinews.kr/data/upi/image/2021/06/03/upi202106030169.jpg",
      content:
        "간편하게 맛보는 달콤한 풍미간편하게 맛보는 달콤한 풍미간편하게 맛보는 달콤한 풍미간편하게 맛보는 달콤한 풍미간편하게 맛보는 달콤한 풍미간편하게 맛보는 달콤한 풍미간편하게 맛보는 달콤한 풍미",
    },
  ]);

  return (
    <ProductDetailWrap>
      <React.Fragment>
        <DetailMenu>
          <Link to="1" spy={true} smooth={true}>
            <div>상품설명</div>
          </Link>
          <Link to="2" spy={true} smooth={true}>
            <div>상세정보</div>
          </Link>
          <Link to="3" spy={true} smooth={true}>
            <div>후기</div>
          </Link>
          <Link to="3" spy={true} smooth={true}>
            <div>문의</div>
          </Link>
        </DetailMenu>
      </React.Fragment>

      <DetailWrap id="1">
        <img src={item[0].imageUrl} alt="detail" width="100%" />
        <DetailTitle>
          {item[0].subTitle} <br />
          <span style={{ fontSize: "36px" }}>{item[0].productName}</span>
        </DetailTitle>
        <Line />
        <DetailContent>{item[0].content}</DetailContent>
      </DetailWrap>

      <ImgWrap id="2" src={detailImg} />
      <Line style={{ opacity: "0.2" }} />

      <ReviewWrap id="3">
        <Review />
      </ReviewWrap>

    </ProductDetailWrap>
  );
};

const ProductDetailWrap = styled.div`
  //   background-color: rgb(0, 0, 0, 0.2);
  padding-top: 80px;
`;

const DetailMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: bold;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 260px;
    height: 60px;
    border: 1px solid rgb(0, 0, 0, 0.03);
    background-color: rgb(0, 0, 0, 0.02);
    color: #666666;
    font-size: 16px;
  }

  & div:hover {
    cursor: pointer;
    border-bottom: none;
    background-color: white;
    color: var(--maincolor);
  }
`;

const DetailWrap = styled.div`
  padding-top: 40px;
`;

const DetailTitle = styled.div`
  padding: 60px 0 32px 0;
  font-weight: bold;
  font-size: 24px;
`;

const Line = styled.hr`
  opacity: 0.5;
`;

const DetailContent = styled.div`
  padding: 24px 0 80px 0;
  font-size: 18px;
  text-align: left;
  line-height: 2em;
`;

const ImgWrap = styled.img`
  width: 90%;
  margin-bottom: 40px;
`;

const ReviewWrap = styled.div`
  margin-top: 80px;
`;

export default ProductDetail;
