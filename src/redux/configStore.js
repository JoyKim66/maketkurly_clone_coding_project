import { legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

//모듈
import user from "./moduels/user"
import cart from "./moduels/cart"
import post from "./moduels/post"
import main from "./moduels/main";

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({
    user,
    cart,
    post,
    main,
})
const store = createStore(rootReducer,enhancer);

export default store;