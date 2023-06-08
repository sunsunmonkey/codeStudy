import { createStore } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk"
import { applyMiddleware,compose } from "redux";

// 正常情况下 store.dispatch(object)
// 想要派发函数 store.dispatch(function)(要派发函数就要加thunk)

// redux-devtools

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store