import React from 'react';

const Objectives = () => {
  return (
    <section className="search-bar-container-wrapper">
      <div className="search-bar-container">
        <h3 className="que-quieres-aprender">¿Qué quieres aprender?</h3>
        <div className="barra-buscar">
          <div className="barra-buscar-child"></div>
          <div className="search-example">
            <span className="letter">Ahorros</span>
          </div>
          <img className="search-icon" alt="Search" src="./public/search@2x.png" />
        </div>
      </div>
    </section>
  );
};

export default Objectives;