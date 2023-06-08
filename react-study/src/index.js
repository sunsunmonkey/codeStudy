import ReactDOM from "react-dom/client";
import App from "./test/App";
// import App from "./context/App"
// import App from "./event-bus/App";
// import App from "./ref/App";
// import App from "./高阶组件/App";
// import App from "./Transition/App";
// import App from "./Redux_study/basic/App";
// import App from "./Redux_study/RTK/App";


import { Provider } from "react-redux";
// import store from "./Redux_study/basic/store";
import store from "./Redux_study/RTK/store/index";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
    <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>
);