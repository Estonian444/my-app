import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let posts = [
  { id: 1, message: 'Hi, how are you', like: 10 },
  { id: 2, message: 'Its my first post', like: 18 },
]

let dialogs = [
  { id: 1, name: 'Kostiy' },
  { id: 2, name: 'Sergey' },
  { id: 3, name: 'Mary' },
  { id: 4, name: 'Nasty' },
  { id: 5, name: 'Dima' },
]

let messages = [
  { id: 1, message: 'HI' },
  { id: 2, message: 'HYoyooyoyI' },
  { id: 3, message: 'xaxaxa' },
  { id: 4, message: 'hello' },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts} dialogs={dialogs} messages={messages}/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
