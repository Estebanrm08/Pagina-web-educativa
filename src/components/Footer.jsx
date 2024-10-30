import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="cursos2">
        <h2 className="cursos-para-mejorar-container">
          <span>Cursos</span> para mejorar y afianzar tu educación financiera
        </h2>
        <div className="courses-list">
          <div className="course-item">
            <img className="course-icon" src="./public/ellipse-11@2x.png" alt="Ahorro" />
            <a href="https://mispropiasfinanzas.com/presupuesto-y-ahorro" target="_blank" rel="noopener noreferrer">Presupuesto y Ahorro</a>
            <p>Mis Propias Finanzas</p>
          </div>
          <div className="course-item">
            <img className="course-icon" src="./public/ellipse-12@2x.png" alt="Análisis Financiero" />
            <a href="https://www.edx.org/es/learn/financial-analysis" target="_blank" rel="noopener noreferrer">Principios de Análisis Financiero</a>
            <p>Institución Anahuac</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;