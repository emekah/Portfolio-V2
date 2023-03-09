import React from "react";
import "../App/App.scss";
import Header from "../Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from ".././Footer/Footer";
import Hero from "../Hero/Hero";
import Folio from "../Folio/Folio";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Hero />

        <Folio />

        <Footer />
      </div>
    </div>
  );
};

export default App;
