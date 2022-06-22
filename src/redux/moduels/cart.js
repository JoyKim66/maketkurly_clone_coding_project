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
export const addCartDB = (cart,callback) => {
    return async function(dispatch) {
        console.log(cart.productId,cart.quantity,cart.totalPrice);
        await axios({
            //url,data값 추후수정
            method: "post",
            url: `${BASE_URL}/api/cart/${cart.productId}`,
            data: {
                quantity: cart.quantity,
                totalPrice: cart.totalPrice,
            },
            headers: {     
                'Authorization': "Bearer " + localStorageGet("jwtToken") ,
            },
            }).then((response)=> {
                console.log("장바구니추가 미들웨어 데이터:",response.data);
                if(response.data){
                    window.alert("장바구니 담기 완료!");
                    callback();
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
            
                dispatch(cartLoad(response.data));
            }).catch((err)=>{
                console.log(err);
                window.alert("장바구니 목록 호출 실패");
            })
    }
}

//장바구니상품 삭제 미들웨어
export const deleteCartDB = (cartId) => {
    return async function(dispatch) {
        console.log("장바구니삭제미들웨어",cartId);
        await axios({
            method: "delete",
            url: `${BASE_URL}/api/cart/${cartId}`,
            headers: {     
                'Authorization': "Bearer " + localStorageGet("jwtToken") ,
            },
            }).then((response)=> {
                console.log('장바구니미들웨어 response::',response.data);
                if(response.data){
                    window.alert("장바구니에 담긴 물품을 삭제했습니다");
                }
            }).catch((err)=>{
                console.log(err);
                window.alert("장바구니 삭제를 실패했습니다 다시 시도해주세요");
            })
    }
}

//장바구니 상품 주문 미들웨어
export const orderCartDB = (orderObj) => {
    return async function(dispatch) {
        console.log("상품주문 미들웨어::",orderObj)
        await axios({
            method: "post",
            url: `${BASE_URL}/api/order`,
            data: orderObj,
            headers: {     
                'Authorization': "Bearer " + localStorageGet("jwtToken") ,
            },
            }).then((response)=> {
                console.log('상품주문 미들웨어 response::',response.data);
                if(response.data){
                    window.alert("주문을 완료하였습니다");
                }
            }).catch((err)=>{
                console.log(err);
                window.alert("상품주문을 실패했습니다 다시 시도해주세요");
            })
    }
}



//reducer 
export default function reducer(state=initailState,action) {
    switch(action.type) {
        case "LOAD_CART" : {
            console.log("cart-load리듀서",state,action)
            //로드 액션 함수의 받아오는 값 = cart키값으로 받아옴
            // return {type: LOAD_CART, cart}
            return action.cart
        }
        default:
            return state;
    }
}


//configstroe에 주입하기
