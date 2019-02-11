import React from 'react';
import './Header.css';

function HeaderTitle(){
    return (
        <div className="header-top">
            <h2>Lambda School</h2>
            <p>@LambdaSchool</p>
            <p class="date-time"></p>
        </div>
    );
}

export default HeaderTitle;