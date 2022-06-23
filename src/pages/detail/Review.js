// 상세페이지 리뷰 목록
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios"; 
import { apis } from "../../api/index";

import ReviewDetail from "./ReviewDetail";
import Pagination from "./Pagination"; 

const Review = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const productId = params.productId;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(7);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      //   const response = await axios.get(
      //     "https://jsonplaceholder.typicode.com/posts"
      //   );
      await apis.productDetail(productId).then((res) => {
        console.log(res.data.reviews, "sub page review data");
        setPosts(res.data.reviews);
      });

      setLoading(false);
    };
    fetchData();
  }, []);

  console.log(posts);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }; 

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

      <div>
        <ReviewDetail posts={currentPosts(posts)} loading={loading} />
        <ReviewWriteBtn
          onClick={() => {
            navigate("/products/" + productId + "/review");
          }}
        >
          후기쓰기
        </ReviewWriteBtn>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={setCurrentPage}
        />
      </div>
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

const ReviewWriteBtn = styled.div`
  border: 1px solid var(--maincolor);
  background-color: var(--maincolor);
  color: white;
  width: 120px;
  margin: 28px 0 40px auto;
  padding: 4px 0;
  font-size: 14px;

  &:hover {
    background-color: white;
    color: var(--maincolor);
    cursor: pointer;
  }
`;

export default Review;
