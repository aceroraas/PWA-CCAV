import React from 'react';
import '../css/PInicio.css';
import Youtube from '../componentes/Youtube';
import Banner from '../componentes/Banner';
import Localizaciones from '../componentes/Localizaciones';
import Anuncios from '../componentes/Anuncios';
import Pastores from '../componentes/Pastores';
import FormularioAyuda from '../componentes/FormularioAyuda';

function PInicio() {
    return <>
         <Banner ruta={'global'} /> 
        <Localizaciones />
        <Anuncios ruta={'global'}/>
        <Youtube ruta={'global'} />
        <Pastores ruta ={'global'}/>
        <FormularioAyuda ruta ={'global'} />
    </>
}
export default PInicio;