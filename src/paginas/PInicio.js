import React from 'react';
import '../css/PInicio.css';
import Banner from '../componentes/Banner';
import Localizaciones from '../componentes/Localizaciones';
import Anuncios from '../componentes/Anuncios';
import Youtube from '../componentes/Youtube';


function PInicio(){
    return (
        <div>
            <Banner ruta={'/global'} />{ /**la ruta /global hace refencia a los banner des la base de datos relacionados a la web global */}
            <Localizaciones />
            <Anuncios />
            <Youtube ruta={'/global'}/>
            <br/>
        </div>
    );
}
export default PInicio;