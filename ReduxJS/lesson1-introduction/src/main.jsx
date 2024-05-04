import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { addCount } from './tools/actions/counterActions';
import counterStore from './tools/store/counterStore';

const store = counterStore();
store.subscribe(() => {
  console.log(store.getState());
})


store.dispatch(addCount({a:5}))
store.dispatch(addCount({a:15}))
store.dispatch(addCount({a:1}))
store.dispatch(addCount({a:30}))
store.dispatch(addCount({a:null}))










ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
