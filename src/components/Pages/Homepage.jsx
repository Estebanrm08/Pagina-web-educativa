import React from 'react'
import AboutUs from '../PageContent/AboutUS'
import Cursos from '../PageContent/Cursos'
import FinancialCulture from '../PageContent/FinancialCulture'
import Objectives from '../PageContent/Objectives'

const Homepage = () => {
    return (
        <div>
            <AboutUs />
            <Objectives />
            <FinancialCulture />
            <Cursos />
        </div>
    )
}

export default Homepage