import React from 'react';
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
          <a href="#" className="cursos1">Cursos</a>
          <a href="#" className="contacto">Preguntas Frecuentes</a>
          <a href="#" className="sobre-nosotros1">Sobre Nosotros</a>
        </div>
      </nav>
    </header>
  );
};

export default LandingPage;