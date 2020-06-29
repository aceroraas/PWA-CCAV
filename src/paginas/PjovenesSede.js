import React from 'react'
import Banner from '../componentes/Banner'
import Anuncios from '../componentes/Anuncios'
import Youtube from '../componentes/Youtube'
import {  useLocation } from 'react-router-dom'

function JovenesSede() {
let location = useLocation();
    console.log();
    
    return <>
        <Banner ruta={location.pathname}/>
        <Anuncios ruta={location.pathname}/>
        <Youtube ruta={location.pathname}/>
    
    </>
}

export default JovenesSede;