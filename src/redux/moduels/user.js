import axios from "axios";
import {
  localStorageGet,
  localStorageRemove,
  localStorageSet,
} from "../../shared/localStorage";
import produce from "immer";
import { BASE_URL } from "../../assets/config";
import { handleActions } from "redux-actions";
import jwt_decode from "jwt-decode";
import { actionCreators as mainActions } from "./main"


//action type
const LOGIN = "user/LOGIN";
const SET_USER = "user/SET_USER";
const LOG_OUT = "user/LOG_OUT";

//initialState
const initialState = {
  user: [],
  is_login: false,
};

//액션생성함수
export const userLogin = (user) => {
  return { type: LOGIN, user };
};

export const setUser = (user) => {
  return { type: SET_USER, user };
};

export const logout = (user) => {
  return { type: SET_USER, user };
};

//회원가입 미들웨어
export const signupDB = (user, callback) => {
  return function (dispatch) {
    // console.log(user);
    axios({
      method: "post",
      url: `${BASE_URL}/api/user/signup`,
      data: {
        username: user.id,
        password: user.pw,
        name: user.name,
        email: user.email,
      },
    })
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          window.alert("회원가입이 완료되었습니다!");
          callback();
        }
      })
      .catch((err) => {
        console.log(err);
        window.alert("회원가입에 실패했습니다 다시시도해주세요.");
      });
  };
};

//아이디 중복검사 미들웨어
export const idCheckDB = (userId) => {
  return function (dispatch) {
    axios({
      method: "get",
      url: `${BASE_URL}/api/user/idCheck/${userId.id}`,
    })
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          window.alert("사용가능한 아이디입니다");
        } else {
          window.alert("중복된 아이디입니다");
        }
      })
      .catch((err) => {
        console.log(err);
        window.alert("서버상태가 불안정합니다. 잠시후 다시 시도해주세요");
      });
  };
};

//로그인 미들웨어
export const loginDB = (user, callback) => {
  return function (dispatch) {
    console.log(user);
    axios({
      method: "post",
      url: `${BASE_URL}/api/user/login`,
      data: {
        username: user.id,
        password: user.pw,
      },
    })
      .then((response) => {
        console.log(response.data);
        const token = response.data.accessToken;
        const DecodedToken = jwt_decode(token);
        localStorageSet("jwtToken", token);
        if (response.data) {
          dispatch(
            setUser({
              username: user.id,
              nickname: DecodedToken.nickname,
            })
          );
          window.alert("로그인 되었습니다");
          callback();
        }
      })
      .catch((err) => {
        console.log("login Error::", err);
        window.alert("아이디와 비밀번호를 다시확인해주세요");
  
      });
  };
};


//로그아웃 미들웨어
export const logoutDB = () => {
  return function (dispatch) {
    localStorageRemove("jwtToken");
    dispatch(logout())
    window.alert("로그아웃 되었습니다");
    window.location.replace("/");
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        // draft.user = action.payload.user;
        console.log(state,action)
        draft.is_login = true;
        draft.user = action.user
      }),
      [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
				localStorageRemove("jwtToken");
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

const actionCreators = {

};

export { actionCreators };
