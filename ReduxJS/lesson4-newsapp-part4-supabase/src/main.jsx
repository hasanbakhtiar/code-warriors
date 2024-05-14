import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/bootstrap.min.css'
import App from './App';
import { addNews, getNews } from "./tools/actions/newsActions";
import newsStore from "./tools/store/newsStore"
import { Provider } from 'react-redux';
import { supabase } from './supabase/supabaseClient';

const store = newsStore();

store.subscribe(() => {
  console.log(store.getState());
})





const fetchData = async()=>{
  const { data, error } = await supabase
  .from('items')
  .select()

  store.dispatch(getNews(data));
}
fetchData();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
