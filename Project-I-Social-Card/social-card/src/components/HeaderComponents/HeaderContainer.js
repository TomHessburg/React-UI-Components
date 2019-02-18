import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail.js";
import HeaderTitle from "./HeaderTitle"
import HeaderContent from "./HeaderContent.js"


function HeaderContainer(){
    return(
        <div className="head-container">
            <ImageThumbnail />
            <div className="header-right">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    );
}


export default HeaderContainer;