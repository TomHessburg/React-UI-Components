import React from 'react';
import './Card.css';

function CardContent(){
    return (
        <div className="card-content">
            <a href="https://www.reactjs.org" target="_blank">
                <h3>Get started with React</h3>
            
                <p>React makes it painless to create intractive UIs. 
                    Design simple views for each state in your application.
                </p>
                <p>reactjs.org</p>
            </a>
        </div>
    );
}
export default CardContent;
