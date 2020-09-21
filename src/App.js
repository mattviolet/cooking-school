import React from "react";
import "./App.css";
import CoverPage from "./components/CoverPage";
import Hours from "./components/Hours";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <CoverPage />
      <Hours text="I am a prop holding text. I am passed to the hours component!" />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
