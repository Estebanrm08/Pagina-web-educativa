import React from 'react';

const FinancialCulture = () => {
  return (
    <section className="how-it-works-content-wrapper">
      <div className="how-it-works-content">
        <h1 className="como-funciona-fortubil-container">
          <span>Cómo funciona <span className="fortubil1">Fortubil</span></span>
        </h1>
        <div className="features">
          <div className="features-grid">
            <div className="frame-1">
              <img className="pvyn5etif-icon" loading="lazy" alt="Icono" src="./public/pvyn5etif.svg" />
              <div className="encuentra-todo-lo-de-finanzas">Encuentra todo lo de finanzas</div>
              <p className="fuente-de-recopilacion">Fuente de recopilación financiera para personas que 
                                                        están interesadas en mejorar su educación.</p>
            </div>
            <div className="frame-2">
              <img className="buqvh6tif-icon" loading="lazy" alt="Icono" src="./public/buqvh6tif.svg" />
              <div className="cursos-de-nuestros">Cursos de nuestros promotores</div>
              <p className="contamos-con-plataformas">Contamos con plataformas y especialistas para una experiencia más 
                                                        completa en la educación.</p>
            </div>
            <div className="frame-3">
              <img className="buqvh6tif-icon" loading="lazy" alt="Icono" src="./public/buqvh6tif.svg" />
              <div className="lenguaje-facil">Lenguaje fácil</div>
              <p className="contamos-con-plataformas">Brindar el lenguaje financiero de forma fácil y sencilla para comprender.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialCulture;