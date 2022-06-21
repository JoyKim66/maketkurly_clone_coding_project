// 후기 작성하기 페이지
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ReviewWrite = () => {
  const [item, setItem] = useState([
    {
      productId: 1,
      productName: "[폴 바셋] 바리스타 돌체라떼 300ml",
      thumbnailUrl:
        "https://www.baristapaulbassett.co.kr/upload/product/A/thumbnail_1_201903211107237211.jpg",
    },
  ]);

  const [review, setReview] = useState(
    {
        productId: 1,
        reviewId: 1,
        commentTitle: "나도 반가워요",
        commentDetail: "코멘트내용",
        imageFile: "~~",
        name: "jin",
        createdAt: "LocalDateTime",
   }
  );

  return (
    <ReviewWriteWrap>
      <span>후기 작성</span>

      <ProductInfo>
        <img src={item[0].thumbnailUrl} alt="상품이미지" />
        <div>{item[0].productName}</div>
      </ProductInfo>

      <ReviewInput>
        <tbody>
            <tr><TitleInput>제목</TitleInput><BoxInput><input type="text"/></BoxInput></tr>
            <tr><TitleInput>후기 작성</TitleInput><BoxInput><input type="text"/></BoxInput></tr>
            <tr><TitleInput>사진 등록</TitleInput><BoxInput><input type="file"/></BoxInput></tr>
        </tbody>
      </ReviewInput>
    </ReviewWriteWrap>
  );
};

const ReviewWriteWrap = styled.div`
  width: 1050px;
  margin: 20px auto 60px auto;

  & span {
    font-size: 24px;
    font-weight: bold;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0 20px 0;
  & img {
    width: 25%;
    height: 320px;
  }

  & div {
    width: 70%;
    text-align: left;
    font-size: 16px;
    font-weight: bold;
  }
`;

const ReviewInput = styled.table`
// display: flex;
// flex-direction: row;
//  width: 100%;
//  justify-content: space-between;
`;

const TitleInput = styled.tr`
width: 25%;
  font-weight: bold;
`;

const BoxInput = styled.tr`
// width: 70%;
`;

export default ReviewWrite;
