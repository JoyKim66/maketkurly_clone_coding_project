// 상세페이지 상세정보
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../../redux/moduels/post";
import { apis } from "../../api/index";

import detailImg from "../../static/detail.png";
import Review from "./Review";

const ProductDetail = ({ id }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.post.detail_post);
  console.log(data);

  const [item, setItem] = useState({});

  // 해당 id값 상세 정보 불러오기
  useEffect(() => {
    dispatch(postActions.detailPostDB(id));
  }, []);
  useEffect(() => {
    setItem(data);
    console.log(item);
  }, [data]);

  return (
    <ProductDetailWrap>
      <React.Fragment>
        {/* 상세페이지 카테고리 메뉴 */}
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

      {/* 상품설명 부분 */}
      <DetailWrap id="1">
        <img src={item.imageUrl} alt="detail" width="100%" />
        <DetailTitle>
          {item.subtitle} <br />
          <span style={{ fontSize: "36px" }}>{item.productName}</span>
        </DetailTitle>
        <Line />
        <DetailContent>{item.contentDetail}</DetailContent>
      </DetailWrap>

      {/* 상세정보 부분 */}
      <ImgWrap id="2" src={detailImg} />
      <Line style={{ opacity: "0.2" }} />

      {/* 후기 부분 */}
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
