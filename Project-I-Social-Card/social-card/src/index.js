import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));


const repostsCounter = document.getElementById("reposts");
const repostButton = document.getElementById("repost-button");

let countReposts = 0;

repostButton.addEventListener("click", () => {
    countReposts++;
    repostsCounter.innerHTML = countReposts;
})

const likesCounter = document.getElementById("likes");
const likesButton = document.getElementById("likes-button");

let countLikes = 0;

likesButton.addEventListener("click", () => {
    countLikes++;
    likesCounter.innerHTML = countLikes;
})