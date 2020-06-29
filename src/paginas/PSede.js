import React from 'react';
import '../css/PSede.css';
import Banner from '../componentes/Banner';
import Anuncios from '../componentes/Anuncios';
import { useLocation } from 'react-router-dom';
import Youtube from '../componentes/Youtube';
import Pastores from '../componentes/Pastores';
import FormularioAyuda from '../componentes/FormularioAyuda';


function PSede(){
    let location = useLocation().pathname.split('/')[2];
    return (
        <div>
           { <Banner ruta={location} /> 
           }
            <center>
                <h1>CENTRO CRISTIANO ADORACIÓN VIVA</h1>
                <h2>SEDE {location.toUpperCase()}</h2>
                <Anuncios ruta={location}/>
                <Youtube ruta={location} />
                <Pastores ruta ={location}/>
                <FormularioAyuda ruta ={location}/>
            </center>
            <br/>
            
        </div>
    );
}
export default PSede;