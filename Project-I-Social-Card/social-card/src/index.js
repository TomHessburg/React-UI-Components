import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import moment from 'moment'

ReactDOM.render(<App />, document.getElementById('root'));




const date = moment().format("Do MMM");

let dateTime = document.querySelector(".header-top .date-time");


dateTime.innerHTML = "· " + date;




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

