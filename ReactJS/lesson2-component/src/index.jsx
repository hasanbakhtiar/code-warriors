import React,{ Component } from 'react';
import ReactDOM from 'react-dom/client';
// import {ListOne,ListTwo} from './List';
import List from './List';


class App extends Component {
  render() {
    return (<>
      <h1>React Starter</h1>
      <List />
    {/* <ListOne/>
    <ListTwo/> */}

    </>)
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

