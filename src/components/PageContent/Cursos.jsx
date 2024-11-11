import React from 'react';

const Footer = () => {
  return (
    <section className="footer">
      <div className="cursos2">
        <h2 className="cursos-para-mejorar-container">
          <span>Cursos</span> para mejorar y afianzar tu educación financiera
        </h2>
        <div className="courses-list">
          <div className="course-item">
            <img className="course-icon" src="/ellipse-11@2x.png" alt="Ahorro" />
            <a href="https://mispropiasfinanzas.com/presupuesto-y-ahorro" target="_blank" rel="noopener noreferrer">Presupuesto y Ahorro</a>
            <p>Mis Propias Finanzas</p>
          </div>
          <div className="course-item">
            <img className="course-icon" src="/ellipse-12@2x.png" alt="Análisis Financiero" />
            <a href="https://www.edx.org/es/learn/financial-analysis" target="_blank" rel="noopener noreferrer">Principios de Análisis e instrumentos financieros</a>
            <p>Institución Anahuac</p>
          </div>
          <div className="course-item">
            <img className="course-icon" src="/ellipse-12-1@2x.png" alt="Análisis Financiero" />
            <a href="https://www.edx.org/es/learn/financial-analysis" target="_blank" rel="noopener noreferrer">Excel basico para emprendedores</a>
            <p>Universidad del Rosario</p>
          </div>
          <div className="course-item">
            <img className="course-icon" src="/ellipse-12-2@2x.png" alt="Análisis Financiero" />
            <a href="https://www.edx.org/es/learn/financial-analysis" target="_blank" rel="noopener noreferrer">Introducción a la factura electronica</a>
            <p>LogycaX</p>
          </div>
          <div>
          <img className="" src="/" alt="Análisis Financiero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;