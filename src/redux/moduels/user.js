import axios from "axios";
import { localStorageGet,localStorageSet } from "../../shared/localStorage";
import jwtDecode from "jwt-decode";
import produce from 'immer';
import { BASE_URL } from "../../assets/config";


//action type
const LOGIN = "user/LOGIN";


//initailState
const initailState = {
    user: {
        username: "",
        password: "",
        name: "",
        email: "",
        address: "",
    },
    is_login: false,
}

//액션생성함수
export const userLogin = (user) => {
    return {type: LOGIN, user}
}

//회원가입 미들웨어
export const signupDB = (user,callback) => {
    return function(dispatch) {
        // console.log(user);
        axios({
            method: "post",
            url: `${BASE_URL}/api/user/signup`,
            data: {
                username:user.id,
                password:user.pw,
                name:user.name,
                email:user.email,
            },
            }).then((response)=> {
                console.log(response.data);
                if(response.data){
                    window.alert("회원가입이 완료되었습니다!");
                    callback();
                }
            }).catch((err)=>{
                console.log(err);
                window.alert("회원가입에 실패했습니다 다시시도해주세요.");
            })
    }
}

//아이디 중복검사 미들웨어
export const idCheckDB = (userId) => {
    return function(dispatch) {
        axios({
            method: "get",
            url: `${BASE_URL}/api/user/idCheck/${userId.id}`,
            }).then((response)=> {
                console.log(response.data);
                if(response.data){
                    window.alert("사용가능한 아이디입니다");
                }else{
                    window.alert("중복된 아이디입니다")
                }
            }).catch((err)=>{
                console.log(err);
                window.alert("서버상태가 불안정합니다. 잠시후 다시 시도해주세요");
            })

    }
}

//로그인 미들웨어
export const loginDB = (user,callback) => {
    return function(dispatch) {
        console.log(user);
        axios({
            method: "post",
            url: `${BASE_URL}/api/user/login`,
            data: {
                username:user.id,
                password:user.pw,
            },
            }).then((response)=> {
                console.log(response.data);
                const token = response.data.accessToken;
                localStorageSet("jwtToken", token);
                if(response.data){
                    window.alert("로그인 되었습니다");
                    callback();
                }
            }).catch((err)=>{
                console.log('login Error::',err);
                window.alert("아이디와 비밀번호를 다시확인해주세요");
            })
    }
}




export default function reducer(state=initailState,action={}){
    switch(action.type) {
        default:
            return state;
    }
} 