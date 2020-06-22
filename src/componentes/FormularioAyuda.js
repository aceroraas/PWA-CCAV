import React from 'react';
import '../css/componentes/FormularioAyuda.css';

function FormularioAyuda(props) {
    return <>
        <div className='Fondo'>
            <div className='TarjetaFormulario'>
                <h2>¿Quieres que oremos por ti?</h2>
                <h6>Cuentanos</h6>
                <span>¿Como te llamas?</span>
                <input id='nombreFormulario' type='text' placeholder='Nombre y Apellido' />
                <span>¿Como nos comunicamos contigo?</span>
                <input id='numeroDeTelefono' type='tel' placeholder='+584241234567'/>
                <span>Dejanos tu Correo</span>
                <input id='email' type='email' placeholder='micorreo@correo.com'/>
                <span>Dinos tu motivos</span>
                <textarea id='motivo' class="materialize-textarea" placeholder='Cuentanos porque o quien quieres que oremos'/>
                <button id='btnMotivoOracion'>Solicitar Oración</button>
            </div>
        </div>
    </>
}

export default FormularioAyuda;