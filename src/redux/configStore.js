import { legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

//모듈
import user from "./moduels/user"

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({
    user
})
const store = createStore(rootReducer,enhancer);

export default store;