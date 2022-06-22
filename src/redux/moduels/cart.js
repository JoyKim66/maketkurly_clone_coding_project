import axios from "axios";
import produce from 'immer';
import { BASE_URL } from "../../assets/config";
import { localStorageGet } from "../../shared/localStorage";

//action type
const ADD_CART = "ADD_CART"
const LOAD_CART = "LOAD_CART"

//initailstate
const initailState = []

//action

export const cartAdd = (cart) => {
    return {type: ADD_CART, cart}
}
export const cartLoad = (cart) => {
    return {type: LOAD_CART, cart}
}

//장바구니 담기 미들웨어
export const addCartDB = (cart) => {
    return async function(dispatch) {
        console.log(cart.productId,cart.quantity,cart.totalPrice);
        await axios({
            //url,data값 추후수정
            method: "post",
            url: `${BASE_URL}/api/cart/${cart.productId}`,
            data: {
                productId: cart.productId,
                quantity: cart.quantity,
                totalPrice: cart.totalPrice,
            },
            headers: {     
                'Authorization': "Bearer " + localStorageGet("jwtToken") ,
            },
            }).then((response)=> {
                console.log(response.data);
                if(response.data){
                    window.alert("장바구니 담기 완료!");
                }
            }).catch((err)=>{
                console.log(err);
                window.alert("장바구니 담기에 실패했습니다 다시 시도해주세요");
            })
    }
}
//장바구니 목록 불러오기 미들웨어
export const getCartDB = () => {
    return async function(dispatch) {
        await axios({
            method: "get",
            url: `${BASE_URL}/api/cart`,
            headers: {     
                'Authorization': "Bearer " + localStorageGet("jwtToken") ,
            },
            }).then((response)=> {
                console.log('장바구니미들웨어 response::',response.data);
                if(response.data){
                    window.alert("장바구니 목록 호출완료");
                }
                dispatch(cartLoad(response.data));
            }).catch((err)=>{
                console.log(err);
                window.alert("장바구니 목록 호출 실패");
            })
    }
}

//장바구니상품 삭제
export const deleteCartDB = (cartId) => {
    return async function(dispatch) {
        await axios({
            method: "delete",
            url: `${BASE_URL}/api/cart${cartId}`,
            headers: {     
                'Authorization': "Bearer " + localStorageGet("jwtToken") ,
            },
            }).then((response)=> {
                console.log('장바구니미들웨어 response::',response.data);
                if(response.data){
                    window.alert("장바구니 삭제");
                }
            }).catch((err)=>{
                console.log(err);
                window.alert("장바구니 삭제 실패");
            })
    }
}



//reducer 
export default function reducer(state=initailState,action) {
    switch(action.type) {
        case "LOAD_CART" : {
            console.log("cart-load리듀서",state,action)
            return action.cart
        }
        default:
            return state;
    }
}







//configstroe에 주입하기
