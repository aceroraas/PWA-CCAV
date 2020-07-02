import React from 'react';
import '../css/componentes/Pastores.css';
import pastoresccavbna from '../recursos/img/pastores/michele_yunelvis.png';
import pastoresccavpto from '../recursos/img/pastores/angel_leobalda.png';


function Pastores(props) {
    if (props.ruta === 'bna') {
        return <>
            <div className='FondoPastores' style={{marginLeft: '0px'}}>
                <center>
                <img src={pastoresccavbna} alt='PASTOR MICHELLE SANTORO Y PASTORA YUNELVIS DE SANTORO' />
                <h6>PASTOR MICHELLE SANTORO - CCAV BARCELONA</h6>
                </center>
            </div>
        </>

    } else if (props.ruta === 'pto') {
        return <>
            <div className='FondoPastores'>
                <center>
                <img src={pastoresccavpto} alt='PASTOR ANGEL FERRANTE Y PASTORA LEOBALDA DE FERRANTE' />
                <h6>PASTOR ANGEL FERRANTES - CCAV PUERTO LA CRUZ</h6>
                </center>
            </div>
        </>
    } else {
        return <>
            <div className='FondoPastores'>
                <img src={pastoresccavbna} alt='PASTOR MICHELLE SANTORO Y PASTORA YUNELVIS DE SANTORO' />
                <h6>PASTOR MICHELLE SANTORO - CCAV BARCELONA</h6>
                <img src={pastoresccavpto} alt='PASTOR ANGEL FERRANTE Y PASTORA LEOBALDA DE FERRANTE' />
                <h6>PASTOR ANGEL FERRANTES - CCAV PUERTO LA CRUZ</h6>
            </div>
        </>

    }

}

export default Pastores;
