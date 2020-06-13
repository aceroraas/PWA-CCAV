import React from 'react';
import '../css/componentes/Localizaciones.css';
import { Link } from 'react-router-dom';

function Localizaciones(){

    return(
        <div className='localizaciones'>
            <center><h2>UBICANOS</h2>
            <div className='btnGrupo'>
            <Link className='btnLocacion tooltipped' data-position="top" data-tooltip="Excelente Te estaremos esperando" to='/barcelona'>Barcelona</Link>
            <Link className='btnLocacion disabled tooltipped'data-position="top" data-tooltip="Excelente Te estaremos esperando" to='/lecheria'>Lecheria</Link>
            <Link className='btnLocacion  tooltipped' data-position="top" data-tooltip="Excelente Te estaremos esperando" to='/puerto'>Puerto La Cruz</Link>
            </div>
            <h3>Donde te quede más cerca</h3>
            </center>
        </div>
    )

}
export default Localizaciones;
