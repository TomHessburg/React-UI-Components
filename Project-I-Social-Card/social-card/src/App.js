import React from 'react';
import './App.css';
import ImageThumbnail from "./components/HeaderComponents/ImageThumbnail.js"
import HeaderTitle from "./components/HeaderComponents/HeaderTitle.js"
import HeaderContent from "./components/HeaderComponents/HeaderContent.js"

import CardBanner from "./components/CardComponents/CardBanner.js";
import CardContent from "./components/CardComponents/CardContent.js"

const App = () => {
  return (
    // <div>
    //   <h3>Welcome to React Social Card!</h3>
    //   <p>
    //     Begin by exploring the `components` directory. You'll notice we have a
    //     few files that we've already included in there to get you started right
    //     away building components. You'll need to make sure you include your
    //     components that you build in this file to watch your app come to life
    //   </p>
    //   <p>
    //     <strong>
    //       Don't forget to `default export` your components and import them here
    //       inside of this file in order to make them work.
    //     </strong>
    //   </p>
    // </div>
    <div className="app">

      <div className="header">
        <ImageThumbnail />
        <HeaderTitle />
        <HeaderContent />
      </div>

      <div className="card-container">
        <CardBanner />
        <CardContent />
      </div>
    </div>
   

  );
};

export default App;
