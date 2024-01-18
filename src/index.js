import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {addPost, subscride, updataNewPostText, updataNewMessageText, addMessage} from './redux/State'
import state from './redux/State'



let rerenderEntireTree = (state) => {

    ReactDOM.render(
      <BrowserRouter>
        <App state={state} addPost={addPost} 
        addMessage={addMessage}
        updataNewPostText={updataNewPostText} 
        updataNewMessageText={updataNewMessageText}/>
      </BrowserRouter>, document.getElementById('root'));
  }
  

rerenderEntireTree(state);

subscride(rerenderEntireTree)


