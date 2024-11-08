import React from 'react';

const AboutUS = () => {
  return (
    <section className="principal-inner">
      <div className="tagline-parent">
        <div className="tagline" id="taglineContainer">
          <div className="plataforma-de-educacion">PLATAFORMA DE EDUCACIÓN FINANCIERA</div>
          <h1 className="despierta-tu-potencial-container">
            <p className="despierta-tu-potencial">¡Despierta tu potencial financiero
              <span> y aprende fácil de </span>
              <span className="dinero">dinero</span>
              <span className="span">!</span>
            </p>
          </h1>
        </div>
        <div className="illustration">
          <img className="ilustracion-icon" loading="lazy" alt="Ilustración" src="./public/ilustracion@2x.png" />
        </div>
      </div>
    </section>
  );
};

export default AboutUS;