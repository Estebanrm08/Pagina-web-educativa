import React from "react";
import AboutUs from "./components/AboutUs";
import FinancialCulture from "./components/FinancialCulture";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Objectives from "./components/Objectives";
import "./styles/global.css";
import "./styles/styles.css";

const App = () => {
  return (
    <div>
      <LandingPage />
      <AboutUs />
      <Objectives />
      <FinancialCulture />
      <Footer />
    </div>
  );
};

export default App;