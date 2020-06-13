import React, { useState, useEffect } from 'react';
import '../css/componentes/Youtube.css';
import Iframe from 'react-iframe';
import firebase from "../firebaseConfig";
import 'firebase/firebase-database';


//necesito traer de firebase el enlace de youtube correspondiente.
// ruta firebase: https://ccav-6cafa.firebaseio.com/pagina/global/banner_youtube

//necesito mostrar el enlace en el iframe.
// ruta.url = "https://www.youtube.com/embed/9L_xJwwTbS8"
// ruta.codigo = 9L_xJwwTbS8


function useObtenerCodigoYoutube(ruta) {
    let [codigoYoutube, setcodigoYoutube] = useState(null);

    useEffect(() => {
        const buscaRuta = firebase.database().ref('pagina/' + ruta + '/banner_youtube');
        buscaRuta.once('value').then((respuesta) => {
            setcodigoYoutube(respuesta.val());
        }, (e) => {
            console.log('error de base de datos: ' + e);
            setcodigoYoutube({ error: true, mensaje: 'error de base de datos: ' + e });
        });
    }, [setcodigoYoutube, ruta]);

    return codigoYoutube;
}

function Youtube(props) {
    let urlYoutube = useObtenerCodigoYoutube(props.ruta);

    return urlYoutube === null ?
        (<h1>CARGANDO Video...</h1>)
        : (
            urlYoutube.error === true ? (<h1>EL video no puede ser cargado</h1>)
                : (<Iframe loading="lazy" src={"https://www.youtube.com/embed/" + urlYoutube.codigo} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />)
        );
}

export default Youtube;