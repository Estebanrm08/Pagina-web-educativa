import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const LandingPage = () => {
  return (
    <header className="encabezado">
      <div className="logo-name" id="logoName">
        <img className="logo-icon" loading="lazy" alt="Logo" src="./public/logo.svg" />
        <div className="fortubil-wrapper">
          <div className="fortubil">FORTUBIL</div>
        </div>
      </div>
      <nav className="navigation">
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page1">Cursos</Link></li>
            <li><Link to="/page2">Preguntas Frecuentes</Link></li>
            <li><Link to="/page3">Sobre Nosotros</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default LandingPage;