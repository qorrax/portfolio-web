import React from 'react';
import './App.css';
import NavBar from "./Component/NavBar";
import HeroSection from "./Component/Hero/HeroSection";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection title="My Hero Section" description="This is my hero section.">
       </HeroSection>
    </div>
  );
}

export default App;

