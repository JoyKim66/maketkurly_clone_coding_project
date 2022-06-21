// 상세페이지 리뷰 목록
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReviewDetail from "./ReviewDetail";

const Review = () => {
  const [item, setItem] = useState([
    {
      reviewId: 1,
      commentTitle: "폴바셋 돌체라떼 너무 맛있어요",
      commentDetail: "폴바셋 역시 맛있어요",
      imageFile:
        "https://www.baristapaulbassett.co.kr/upload/product/A/thumbnail_1_201903211107237211.jpg",
      name: "jin",
      createdAt: "2022-06-21",
    },
    {
      reviewId: 2,
      commentTitle: "폴바셋 돌체라떼 너무 맛나요",
      commentDetail: "폴바셋 역시 맛있어요",
      imageFile:
        "https://www.baristapaulbassett.co.kr/upload/product/A/thumbnail_1_201903211107237211.jpg",
      name: "jenny",
      createdAt: "2022-06-21",
    },
    {
        reviewId: 3,
        commentTitle: "폴바셋 돌체라떼 너무 맛나요",
        commentDetail: "폴바셋 역시 맛있어요",
        imageFile:
          "https://www.baristapaulbassett.co.kr/upload/product/A/thumbnail_1_201903211107237211.jpg",
        name: "jenny",
        createdAt: "2022-06-21",
      },
  ]);

  return (
    <ReviewWrap>
      <ReviewNotice>
        <b>PRODUCT REVIEW</b>
        <br />
        <div style={{ textAlign: "left" }}>
          - 상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글은
          사전동의 없이 담당 게시판으로 이동될 수 있습니다.
          <br />- 배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리
          내 1:1 문의에 남겨주세요.
        </div>
      </ReviewNotice>
      <ReviewTable>
        <tbody>
          <tr>
            <Td>번호</Td>
            <Td>제목</Td>
            <Td>작성자</Td>
            <Td>작성일</Td>
          </tr>
          {item.map((res) => (
            <tr>
              <Td>{res.reviewId}</Td>
              <Td style={{textAlign: "left"}}>{res.commentTitle}</Td>
              <Td>{res.name}</Td>
              <Td>{res.createdAt}</Td>
            </tr>
          ))}
        </tbody>
      </ReviewTable>

      <ReviewWrite>
            후기쓰기
      </ReviewWrite>
    </ReviewWrap>
  );
};

const ReviewWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewNotice = styled.div`
  text-align: left;
  & div {
    padding-top: 12px;
    font-size: 12px;
  }
  margin-bottom: 28px;
`;

const ReviewTable = styled.table`
  border-top: 2px solid var(--maincolor);
  border-collapse: collapse;
  font-size: 13px;

  & tr:hover{
    background-color: rgb(0,0,0, 0.02);
  }
`;

const Td = styled.td`
  border-bottom: 1px solid rgb(0, 0, 0, 0.05);
  padding: 24px 0;
`;

const ReviewWrite = styled.div`
  border: 1px solid var(--maincolor);
  background-color: var(--maincolor);
  color: white;
  width: 120px;
  margin: 28px 0;
  padding: 4px 0;
  font-size: 14px;

  &:hover{
    background-color: white;
    color: var(--maincolor);
    cursor: pointer;
  }
`;

export default Review;
