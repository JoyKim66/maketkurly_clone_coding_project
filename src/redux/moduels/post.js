import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { apis } from "../../api/index";

// Action Type
const GET_POST = "GET_POST";
const GET_DETAIL = "GET_DETAIL";

const ADD_REVIEW = "ADD_REVIEW";
const EDIT_REVIEW = "EDIT_REVIEW";
const DELETE_REVIEW = "DELETE_REVIEW";

// Action creator
const getPost = createAction(GET_POST, (post) => ({ post }));
const getDetail = createAction(GET_DETAIL, (detail_post) => ({
  detail_post,
}));
const addReview = createAction(ADD_REVIEW, (comment_list) => ({comment_list}));
const deleteReview = createAction(DELETE_REVIEW, (commentId) => ({commentId}));
const editReview = createAction(EDIT_REVIEW, (itemId, comment_list) => ({itemId, comment_list}));


const initialState = {
  post: [],
  detail_post: [],
};

// Middlewares
// 전체 상품 불러오기
const getPostDB = () => {
  // let myToken = getCookie("Authorization");
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

// 상품 상세 불러오기
// const detailPostDB = (pid) => {
//   return async function (dispatch, getState, { history }) {
//     // console.log(pid);
//     // let myToken = getCookie("Authorization")
//     axios({
//       method: "get",
//       url: `http://3.38.153.67/api/products?productId=${pid}`,
//     })
//       .then((res) => {
//         // const detail_list = res.data.product;
//         dispatch(getDetail(res.data.product));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

const detailPostDB = (productId) => {
  return async function (dispatch, getState) {
    // console.log(pid);
    await apis
        // .productList()
        .productDetail()
      .then((res) => {
        console.log("******");
        console.log(res.data, "sub page data");
        console.log("******");
        dispatch(getDetail(res.data));
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
        draft.post.push(...action.payload.post);
        console.log("성공");
      }),

    [GET_DETAIL]: (state, action) =>
      produce(state, (draft) => {
        // draft.detail_post = action.payload.detail_post;
        draft.detail_post.push(...action.payload.detail_post);
        console.log("성공");
      }),
  },
  initialState
);

const actionCreators = {
  getPost,
  getPostDB,
  detailPostDB,
  getDetail,
};

export { actionCreators };
