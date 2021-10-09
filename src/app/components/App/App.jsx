import React from "react";
import "../App/App.scss";
import Header from "../Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from ".././Footer/Footer";
import About from "../About/About";
import Hero from "../Hero/Hero";
import Work from "../Work/Work";
import SideIcons from "../SideIcons/SideIcons";
import SideEmail from "../SideEmail/SideEmail";



const App = () => {
  return (
    <div className="app">
      <Header />

      <SideIcons />

      <SideEmail />
      <hr/>
      
      <Hero />

      <About />

      <Work />

      <Footer />
    </div>
  );
};

export default App;
