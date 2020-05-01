import React from 'react';
import '../css/PSede.css';
import Banner from '../componentes/Banner';
import Anuncios from '../componentes/Anuncios';

function nombreDeRuta(){
    return window.location.pathname;
}


function PSede(){
    return (
        <div>
           { <Banner ruta={nombreDeRuta()} /> 
           }
            <center>
                <h1>CENTRO CRISTIANO ADORACIÓN VIVA</h1>
                <h2>SEDE {nombreDeRuta().toUpperCase().split('/')}</h2>
                <Anuncios />
            </center>
            <br/>
            
        </div>
    );
}
export default PSede;