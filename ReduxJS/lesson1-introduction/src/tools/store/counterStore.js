import { createStore } from 'redux';
import { counterReducer } from '../reducers/counterReducer';

const counterStore = () => {

    const store = createStore(counterReducer);
    return store;
}

export default counterStore