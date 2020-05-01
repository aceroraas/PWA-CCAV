import React, { Component } from 'react';
import '../css/componentes/Localizaciones.css';

class Localizaciones extends Component{
componentDidMount() {

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.tooltipped');
        // eslint-disable-next-line
        var instances = M.Tooltip.init(elems,{position:'top', transitionMovement: 0});
      });
}


render(){
    return(
        <div>
            <center><h2>UBICANOS</h2>
            <div className='btnGrupo'>
            <a className='btnLocacion tooltipped' data-position="top" data-tooltip="Excelente Te estaremos esperando" href='/barcelona'>Barcelona</a>
            <a className='btnLocacion disabled tooltipped'data-position="top" data-tooltip="Excelente Te estaremos esperando" href='/lecheria'>Lecheria</a>
            <a className='btnLocacion  tooltipped' data-position="top" data-tooltip="Excelente Te estaremos esperando" href='/puerto'>Puerto La Cruz</a>
            </div>
            <h3>Donde te quede más cerca</h3>
            </center>
        </div>
    )
}

}
export default Localizaciones;
