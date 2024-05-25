import { createStore } from "redux"
import { newsReducer } from "../reducers/newsReducer";

const newsStore = () => {

    const store = createStore(newsReducer);
    return store;

}

export default newsStore