import React from "react";
import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import FinancialCulture from "./components/FinancialCulture";
import Footer from "./components/Footer";
import Objectives from "./components/Objectives";
import "./styles/global.css";
import "./styles/styles.css";

const App = () => {
  return (
    <div>
      <LandingPage />
      <AboutUs />
      <FinancialCulture />
      <Objectives />
      <Footer />
    </div>
  );
};

export default App;