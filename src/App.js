import React from "react";
import Header from "./component/Header";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="w-75 align-content-center mx-auto">
        <Navigation />
        <Footer />
      </div>
    </div>
  );
}

export default App;
