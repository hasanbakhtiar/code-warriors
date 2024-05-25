import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/bootstrap.min.css'
import App from './App';
import { addNews } from "./tools/actions/newsActions";
import newsStore from "./tools/store/newsStore"
import { Provider } from 'react-redux';

const store = newsStore();

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(addNews({ title: "Nintendo Confirms It Will Announce Switch Successor Console ‘Within This Fiscal Year’", desc: "Nintendo has said it will finally announce its Switch successor console “within this fiscal year”, so at some point before March 31, 2025.In a statement published to X / Twitter, Shuntaro Furukawa, President of Nintendo, confirmed the new console as Nintendo published its financial report for the fiscal year ending March 31, 2024. Furukawa also confirmed a Nintendo Direct for this June, but said there will be no mention of the Switch successor during that presentation. Instead, it will focus on Switch games for the latter half of 2024.", img: "https://assets1.ignimgs.com/2018/10/04/nintendo-switch-1538694863559.jpg?crop=16%3A9&width=282" }));

store.dispatch(addNews({ title: "At Hallow's Eve Walkthrough", desc: "At Hallow's Eve is a Creation Club Community Quest officially added to Fallout 4 as part of its  Update. This side quest will have you investigate a Halloween party gone wrong and solve a deadly puzzle to claim new Halloween-themed settlement decorations and helmets. ", img: "https://assets-prd.ignimgs.com/2022/06/14/fallout-1438198960023-1636461564999-1655207895270.jpg?crop=16%3A9&width=282" }));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
