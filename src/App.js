import React from 'react';
import './App.css';

import menuIcon from "./menu_icon.svg";

function App() {
  return (
    <div className="app_container">
      <div className="site_header">
        <div className="logo">
          E.
        </div>
        <div className="site_menu">
          <img src={menuIcon} alt="menu" />
        </div>
      </div>
      <div className="headings">
        
      </div>
    </div>
  );
}

export default App;
