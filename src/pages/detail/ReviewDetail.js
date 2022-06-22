// 상세페이지 리뷰 목록
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const ReviewDetail = ({ posts, loading }) => {



  return (

         <>
      {loading && <div> loading... </div>}
      <ReviewWrap>
      <ReviewTable>
        <tbody>
          <tr>
            <Td>번호</Td>
            <Td>제목</Td>
            <Td>작성자</Td>
            <Td>작성일</Td>
          </tr>
          {posts.map((res) => (
            <tr>
              <Td>{res.id}</Td>
              <Td style={{ textAlign: "left" }}>{res.title}</Td>
              <Td>{res.userId}</Td>
              <Td>2022-06-22</Td>
            </tr>
          ))}
        </tbody>
      </ReviewTable>
      </ReviewWrap>
    </>

  );
};

const ReviewWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewTable = styled.table`
  border-top: 2px solid var(--maincolor);
  border-collapse: collapse;
  font-size: 13px;

  & tr:hover {
    background-color: rgb(0, 0, 0, 0.02);
  }
`;

const Td = styled.td`
  border-bottom: 1px solid rgb(0, 0, 0, 0.05);
  padding: 24px 0;
`;

export default ReviewDetail;
