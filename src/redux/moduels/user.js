import { localStorageGet,localStorageSet } from "../../shared/localStorage";
import jwtDecode from "jwt-decode";

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

export default function reducer(state=initailState,action={}){
    switch(action.type) {
        default:
            return state;
    }
} 