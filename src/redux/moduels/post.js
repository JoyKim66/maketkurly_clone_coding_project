import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { apis } from "../../api/index";
import { localStorageGet } from "../../shared/localStorage";

// Action Type
const GET_POST = "GET_POST";
const GET_DETAIL = "GET_DETAIL";
const GET_REVIEW = "GET_REVIEW";
const ADD_REVIEW = "ADD_REVIEW";
const EDIT_REVIEW = "EDIT_REVIEW";
const DELETE_REVIEW = "DELETE_REVIEW";

// Action creator
const getPost = createAction(GET_POST, (post) => ({ post }));
const getDetail = createAction(GET_DETAIL, (detail_post) => ({
  detail_post,
}));
const getReview = createAction(GET_REVIEW, (review_post) => ({ review_post }));
const addReview = createAction(ADD_REVIEW, (comment_list) => ({
  comment_list,
}));
const deleteReview = createAction(DELETE_REVIEW, (commentId) => ({
  commentId,
}));
const editReview = createAction(EDIT_REVIEW, (itemId, comment_list) => ({
  itemId,
  comment_list,
}));

const initialState = {
  post: [],
  detail_post: [],
  review_post: [],
};

// Middlewares
// 전체 상품 불러오기
const getPostDB = () => {
  return async function (dispatch, getState) {
    await apis
      .productList()
      .then((res) => {
        console.log(res.data, "main page posts list response");
        dispatch(getPost(res.data));
      })
      .catch((err) => {
        console.log("Main Page GETPOST Error: ", err);
      });
  };
};

// 상세 정보 불러오기
const detailPostDB = (productId) => {
  return async function (dispatch, getState) {
    await apis
      .productDetail(productId)
      .then((res) => {
        console.log("******");
        console.log(res.data, "sub page data");
        console.log("******");
        dispatch(getDetail(res.data));
        console.log("***** dispatch *****");
      })
      .catch((err) => {
        console.log("****** error *****");
        console.log(err);
      });
  };
};

// 상세 정보의 리뷰 불러오기
const getReviewDB = (productId) => {
  return async function (dispatch, getState) {
    await apis
      .productDetail(productId)
      .then((res) => {
        console.log("******");
        console.log(res.data.reviews, "sub page review data");
        console.log("******");
        dispatch(getReview(res.data.reviews));
        console.log("***** dispatch *****");
      })
      .catch((err) => {
        console.log("****** error *****");
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        // draft.post.push(...action.payload.post);
        draft.post = action.payload.post;
        console.log("GET_POST 성공");
      }),

    [GET_DETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.detail_post = action.payload.detail_post;
        console.log("GET_DETAIL 성공");
      }),
    [GET_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.review_post = action.payload.review_post;
        console.log("GET_REVIEW 성공");
      }),
  },
  initialState
);

const actionCreators = {
  getPost,
  getPostDB,
  detailPostDB,
  getDetail,
  getReview,
  getReviewDB,
};

export { actionCreators };
