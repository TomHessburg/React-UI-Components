import React from 'react';
import './App.css';

import HeaderContiner from "./components/HeaderComponents/HeaderContainer.js"
import CardContainer from "./components/CardComponents/CardContainer.js"


const App = () => {
  return (
    <div className="full-card">
        <HeaderContiner />
        <CardContainer />
    </div>
  );
};

export default App;
