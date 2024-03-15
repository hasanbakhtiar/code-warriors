import React from 'react';
import ReactDOM from 'react-dom/client';


class App extends React.Component{
  render(){
    return <h1>React Starter</h1>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

