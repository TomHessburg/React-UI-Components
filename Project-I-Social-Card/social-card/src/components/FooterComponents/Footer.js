import React from 'react';
import './Footer.css';



function Footer(){
    return(
        <div className="footer">
            <div className="icon-holder">
                <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/comment-o-512.png" className="icon"/>
            </div>
            <div className="icon-holder">
                <img src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672407-repost-512.png" className="icon" id="repost-button"/>
            </div>
            <div className="icon-holder">
                <p id="reposts">0</p>
            </div>
            <div className="icon-holder">
                <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/like-512.png" className="icon" id="likes-button"/>
            </div>
            <div className="icon-holder">
                <p id="likes">0</p>
            </div>
            <div className="icon-holder">
                <img src="https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/439/aiga_mail-512.png" className="icon"/>
            </div>
        </div>
    );
}

export default Footer;