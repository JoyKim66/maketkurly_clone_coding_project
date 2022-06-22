import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { BASE_URL } from "../../assets/config";



//Action Type
const GET_CARD = "GET_CARD";
const GET_SLIDER = "GET_SLIDER";

//Action Creator
const getCard = createAction(GET_CARD,(card) => ({card}));
const getSlider = createAction(GET_CARD,(slider) => ({slider}));

//initailstate
const initailState = {
    card: [],
    slider:[],   
};

//middelwares
//content card불러오기
const getCardListDB = () => {
    return async function(dispatch,getState){
        await axios({
            method: "get",
            url: `${BASE_URL}/api/products`,
            }).then((response)=> {
                console.log('contentcard 이미지요청 response::',response.data);
                dispatch(getCard(response.data))
            }).catch((err)=>{
                console.log("contentcard error::",err);
            })
    }
}

const getSliderListDB = () => {
    return async function(dispatch,getState){
        await axios({
            method: "get",
            url: `${BASE_URL}/api/products/upsideimg`,
            }).then((response)=> {
                console.log('slider 이미지요청 response::',response.data);
                dispatch(getSlider(response.data))
            }).catch((err)=>{
                console.log("slider error::",err);
            })
        }
    }


//reducer
export default handleActions(
    {
        [GET_CARD]:(state,action) => 
        produce(state,(draft) => {
            // console.log("state::",state);
            // console.log("action::",action);
            // console.log("draft::",draft);
            draft.card = action.payload.card;
            // console.log(draft.card);
        })

    },
    initailState
);


const actionCreators = {
    getCard,
    getCardListDB,
    getSliderListDB,
    getSlider,
  };

export {actionCreators};