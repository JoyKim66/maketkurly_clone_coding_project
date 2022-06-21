import axios from "axios";
import produce from 'immer';
import { localStorageGet } from "../../shared/localStorage";

//action type
const ADD_CART = "cart/ADD_CART"


//initailstate
const initailState = {}

//action

export const cartAdd = (cart) => {
    return {type: ADD_CART, cart}
}




//장바구니 담기 미들웨어
export const addCartDB = (cart) => {
    return function(dispatch) {
        console.log(cart.productId,cart.quantity,cart.totalPrice);
        axios({
            //url,data값 추후수정
            method: "post",
            url: "http://localhost:5002/add_cart",
            data: {
                productId: cart.productId,
                quantity: cart.quantity,
                totalPrice: cart.totalPrice,
            },
            // headers: {     
            //     'Authorization': "Bearer " + localStorageGet("jwtToken") ,
            // },
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

//reducer
export default function reducer(state=initailState,action={}){
    switch(action.type){
        default:
            return state;
    }
}







//configstroe에 주입하기
