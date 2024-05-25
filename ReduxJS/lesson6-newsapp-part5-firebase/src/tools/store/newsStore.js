import { applyMiddleware, createStore } from "redux"
import { newsReducer } from "../reducers/newsReducer";
import { thunk } from "redux-thunk";

const newsStore = () => {

    const store = createStore(newsReducer,applyMiddleware(thunk));
    return store;

}

export default newsStore