// 후기 작성하기 페이지
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const ReviewWrite = (props) => {
  const dispatch = useDispatch();

  // 1. params 가져오기
  // /products/{productId}/review
  // /products/1/review 에서 '1'을 읽음
  const params = useParams();
  const productId = params.productId;
  console.log(productId);

  // 2. 리덕스 데이터 가져오기
  // 해당 productId의 상세 정보 (productName, thumbnailUrl)
  // const detail_post = useSelector((state) => state.post.detail_post);
  // const initalValue = detail_post.comments;
  // 아직 리덕스 안가져와서 임시 data
  const [item, setItem] = useState([
    {
      productId: { productId },
      productName: "[폴 바셋] 바리스타 돌체라떼 300ml",
      thumbnailUrl:
        "https://www.baristapaulbassett.co.kr/upload/product/A/thumbnail_1_201903211107237211.jpg",
    },
  ]);

  // 작성란 data
  const title_ref = React.useRef();
  const content_ref = React.useRef();

  // 리뷰 작성 정보 객체
  const [review, setReview] = useState({
    commentTitle: "",
    commentDetail: "",
  });

  // 리뷰 작성하기 액션
  const AddReview = () => {
    console.log(title_ref.current.value, content_ref.current.value);
    window.alert("리뷰 작성 완료");
  };

  const addReview = () => {
    if (title_ref.current.value === "" || content_ref.current.value === "") {
      window.alert("내용을 모두 입력해주세요.");
      return;
    }
    console.log(title_ref.current.value, content_ref.current.value);
    return async function (dispatch, getState, { history }) {
      await axios({
        url: `http://localhost:5001/products/${productId}/review`,
        method: "post",
        data: {
          commentTitle: title_ref.current.value,
          commentDetail: content_ref.current.value,
        },
      });
      window.alert("리뷰 작성 완료!");
      history(-1);
    };
  };

  return (
    <ReviewWriteWrap>
      <span>후기 작성</span>

      <ProductInfo>
        <img src={item[0].thumbnailUrl} alt="상품이미지" />
        <div>{item[0].productName}</div>
      </ProductInfo>

      <ReviewInput>
        <tbody>
          <tr>
            <TitleInput>제목</TitleInput>
            <BoxInput>
              <input
                type="text"
                style={{ width: "100%", height: "60px", padding: "10px" }}
                ref={title_ref}
                placeholder="제목을 입력해주세요."
              />
            </BoxInput>
          </tr>
          <tr>
            <TitleInput>후기 작성</TitleInput>
            <BoxInput>
              <textarea
                style={{ width: "100%", height: "200px", padding: "20px 10px" }}
                ref={content_ref}
                placeholder="자세한 후기는 다른 고객의 구매에 많은 도움이 되며,
              일반 식품의 효능이나 효과 등에 오해의 소지가 있는 내용을 작성 시 검토 후 비공개 조치될 수 있습니다."
              />
            </BoxInput>
          </tr>
          <tr>
            <TitleInput>사진 등록</TitleInput>
            <BoxInput>
              <input type="file" />
            </BoxInput>
          </tr>
        </tbody>
      </ReviewInput>

      <AddReviewBtn onClick={addReview}>후기 등록하기</AddReviewBtn>
    </ReviewWriteWrap>
  );
};

const ReviewWriteWrap = styled.div`
  width: 1050px;
  margin: 60px auto;

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
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgb(0, 0, 0, 0.2);
  border-collapse: collapse;

  & tbody tr {
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  }
`;

const TitleInput = styled.td`
  width: 260px;
  font-weight: bold;
  background-color: rgb(0, 0, 0, 0.02);
  padding: 20px 0;
`;

const BoxInput = styled.td`
  width: 720px;
  display: flex;
  align-items: left;
  margin-left: 50px;
  padding: 20px 0;
`;

const AddReviewBtn = styled.div`
  border: 1px solid var(--maincolor);
  background-color: var(--maincolor);
  color: white;
  width: 200px;
  margin: 40px auto 80px auto;
  padding: 8px 0;
  font-size: 15px;
  border-radius: 3px;

  &:hover {
    background-color: white;
    color: var(--maincolor);
    cursor: pointer;
  }
`;

export default ReviewWrite;
