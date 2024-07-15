import React from 'react';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Card 
        title="React" 
        logourl={reactLogo} 
        logoclass="logo react" 
        description="This is a react app" 
        ratings="5/5" 
      />
      <Card 
        title="Vite" 
        logourl={viteLogo} 
        logoclass="logo react" 
        description="Vite is used to power up react library" 
        ratings="4/5" 
      />
      <Card 
        title="Next" 
        logourl={reactLogo} 
        logoclass="logo react" 
        description="Vite is used to power up react library" 
        ratings="5/5" 
      />
      <Card 
        title="Vite" 
        logourl={viteLogo} 
        logoclass="logo react" 
        description="Vite is used to power up react library" 
        ratings="4/5" 
      />
      <Card 
        title="Next" 
        logourl={reactLogo} 
        logoclass="logo react" 
        description="Vite is used to power up react library" 
        ratings="5/5" 
      />
      <Card 
        title="Vite" 
        logourl={viteLogo} 
        logoclass="logo react" 
        description="Vite is used to power up react library" 
        ratings="4/5" 
      />
    </div>
  );
}

export default App;

export const Card = ({ title, logourl, logoclass, description, ratings }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <div className="logoContainer">
        <img src={logourl} className={logoclass} alt="logo" />
      </div>
      <h5>{description}</h5>
      <p>{ratings}</p>
    </div>
  );
};
